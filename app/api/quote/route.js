
import { connectToDB } from "@utils/database";
import Quote from "@models/quote";

export const GET = async (request) => {
    try {
        await connectToDB();

        const quotes = await Quote.find({}).populate('creator');

        return new Response(JSON.stringify(quotes), {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all prompts", {
            status: 500
        })
    }
}