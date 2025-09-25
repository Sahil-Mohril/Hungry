// api/meals.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), "db.json"); // your JSON file in project root
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (req.method === "GET") {
        res.status(200).json(jsonData.meals);
    } else if (req.method === "POST") {
        const newMeal = req.body;
        jsonData.meals.push(newMeal);
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        res.status(201).json(newMeal);
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
