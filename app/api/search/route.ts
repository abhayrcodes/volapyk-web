// pages/api/database.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url || "");
        const query = decodeURI(searchParams.get('q') || "");
        // Open the SQLite database
        const db = await open({
            filename: path.resolve("database", "frontend2.db"),
            driver: sqlite3.Database,
        });

        const data = await db.all('SELECT service_id, service_name, char_score, case0_id, case0_title, case0_class, case1_id, case1_title, case1_class, case2_id, case2_title, case2_class, case3_id, case3_title, case3_class, case4_id, case4_title, case4_class FROM service_scores WHERE service_name LIKE "'+query+'%"');
        db.close()
        return NextResponse.json({ data });
    } catch (error) {
        console.error('Error while handling database API:', error);
        return NextResponse.json({ message: 'Internal server error'}, {status: 500});
    }
}
