// pages/api/database.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url || "");
        const query = decodeURI(searchParams.get('q') || "0");
        
        // Open the SQLite database
        const db = await open({
            filename: path.resolve("database", "frontend2.db"),
            driver: sqlite3.Database,
        })

        const case_data = await db.all('SELECT * FROM service_scores WHERE service_id='+query+';');
        const link_data = await db.all('SELECT link FROM scored_links WHERE service_id='+query+';');
        db.close()
        if (case_data.length === 0) {
            return NextResponse.json({ "exists": 0 });
        } else {
            let case_titles: Array<object> = [];
            for (let i = 0 ; i < 20 ; i++) case_titles.push({ "title": case_data[0]['case'+i+"_title"], "class": case_data[0]['case'+i+"_class"] });
            return NextResponse.json({ "exists": 1, "name": case_data[0].service_name, "num_score": case_data[0].num_score, "char_score": case_data[0].char_score, "case_titles": case_titles,  "link_data": link_data });
        }
        
    } catch (error) {
        console.error('Error while handling API:', error);
        return NextResponse.json({ message: 'Internal server error'}, {status: 500});
    }
}
