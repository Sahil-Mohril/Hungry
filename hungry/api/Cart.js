import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), "db.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (req.method === "GET") {
        res.status(200).json(jsonData.Cart || []);
    }
    else if (req.method === "POST") {
        const newItem = req.body;
        jsonData.Cart.push(newItem);
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        res.status(201).json(newItem);
    }
    else if (req.method === "DELETE") {
        const { id } = req.query;
        jsonData.Cart = jsonData.Cart.filter(item => item.id != id);
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        res.status(200).json({ message: `Item ${id} deleted` });
    }
    else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
