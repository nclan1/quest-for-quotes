
// get

import { connectToDB } from "@utils/database";
import Quote from "@models/quote";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const quote = await Quote.findById(params.id).populate('creator');

        if(!quote) return new Response("quote not found", { status: 404 })

        return new Response(JSON.stringify(quote), {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all prompts", {
            status: 500
        })
    }
}

export const PATCH = async (request, { params }) => {
    const { quote, source } = await request.json();

    try {
        await connectToDB();
        const existingQuote = await Quote.findById(params.id);

        if (!existingQuote) return new Response("quote not found", { status: 404});

        existingQuote.quote = quote;
        existingQuote.source = source;

        await existingQuote.save();

        return new Response(JSON.stringify(existingQuote), { status: 200})
    } catch (error) {
        return new Response ("failed to update quote", {
            status: 500
        })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
    
        await Quote.findByIdAndRemove(params.id);

        return new Response("quote deleted successfully", { status: 200 })
        
    } catch (error) {
        return new Response("failed to delete prompt", {
            status: 500 
        })
    }
}