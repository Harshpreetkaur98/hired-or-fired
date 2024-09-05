import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon('postgresql://AI-Course-Generator_owner:VdSFnxrg0RE3@ep-dark-hill-a1nsbrbh.ap-southeast-1.aws.neon.tech/AI-Course-Generator?sslmode=require');
export const db = drizzle(sql);
