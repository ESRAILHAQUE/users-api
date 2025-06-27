import app from "./app";
import connectDB from "./config/db";

const PORT=process.env.PORT || 5000 ;

async function startServer(){
    try {
      await connectDB();
      app.listen(PORT, () => {
        console.log(`✅ Server is running on http://localhost:${PORT}`);
      });
    } catch (err) {
      console.error("❌ Error starting server:", err);
 
    }
}

startServer();