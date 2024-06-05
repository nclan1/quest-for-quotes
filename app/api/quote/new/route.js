
import { connectToDB } from "@utils/database";

import Quote from "@models/quote";

export const POST = async (req, res) => {
    const { userId, quote, source } = await req.json();

    try {
        await connectToDB();
        const newQuote = new Quote({ creator: userId, source, quote})

        await newQuote.save();

        return new Response(JSON.stringify(newQuote), { status: 201})
    } catch (error) {
        return new Response("Failed to create new quote", { status: 500 })
    }
}