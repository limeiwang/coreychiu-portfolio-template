import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = '/tmp/blog-visit-stats';
const TOTAL_FILE = path.join(DATA_DIR, 'total.json');
const DAILY_FILE = path.join(DATA_DIR, 'daily.json');

function readCount(filePath: string): number {
  try {
    if (!fs.existsSync(filePath)) return 0;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data.count || 0;
  } catch {
    return 0;
  }
}

function writeCount(filePath: string, count: number) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify({ count }));
}

export async function GET() {
  try {
    const totalUV = readCount(TOTAL_FILE);
    const dailyFile = path.join(DATA_DIR, `${new Date().toISOString().split('T')[0]}.json`);
    const dailyUV = readCount(dailyFile);

    return NextResponse.json({ totalUV, dailyUV });
  } catch {
    return NextResponse.json({ totalUV: 0, dailyUV: 0 });
  }
}

export async function POST() {
  try {
    // 总计数 +1
    const total = readCount(TOTAL_FILE) + 1;
    writeCount(TOTAL_FILE, total);

    // 今日计数 +1
    const today = new Date().toISOString().split('T')[0];
    const dailyFile = path.join(DATA_DIR, `${today}.json`);
    const daily = readCount(dailyFile) + 1;
    writeCount(dailyFile, daily);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}