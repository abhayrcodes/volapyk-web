// pages/api/database.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { NextResponse } from 'next/server';
/*
export async function GET(req: any, res: any) {
  try {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      return res.status(400).json({ message: 'Invalid query parameter' });
    }

    // Open the SQLite database
    const db = await open({
      filename: 'frontend2.db',
      driver: sqlite3.Database,
    });

    // Execute the specified query
    const data = await db.all(q);

    // Close the database connection
    await db.close();

    res.status(200).json(data);
  } catch (error) {
    console.error('Error while handling database API:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
*/

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url || "");
        const query = searchParams.has('q');
        // Open the SQLite database
        const db = await open({
            filename: 'frontend2.db',
            driver: sqlite3.Database,
        });

        const data = await db.all('SELECT * FROM service_scores');
        return NextResponse.json({ data });
    } catch (error) {
        console.error('Error while handling database API:', error);
        return NextResponse.json({ message: 'Internal server error'}, {status: 500});
    }
}
