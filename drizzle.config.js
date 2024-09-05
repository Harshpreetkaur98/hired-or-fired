/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-Course-Generator_owner:VdSFnxrg0RE3@ep-dark-hill-a1nsbrbh.ap-southeast-1.aws.neon.tech/AI-Course-Generator?sslmode=require',
    }
  };