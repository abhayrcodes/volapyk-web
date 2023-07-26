// pages/api/database.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url || "");
        const query = decodeURI(searchParams.get('q') || "");
        // Open the SQLite database
        const db = await open({
            filename: 'database\\frontend2.db',
            driver: sqlite3.Database,
        });

        const data = await db.all('SELECT * FROM service_scores WHERE service_name LIKE "'+query+'%"');
        return NextResponse.json({ data });
    } catch (error) {
        console.error('Error while handling database API:', error);
        return NextResponse.json({ message: 'Internal server error'}, {status: 500});
    }
}
