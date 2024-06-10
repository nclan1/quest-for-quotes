
'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';
import { Router } from 'next/router';

const EditQuote = () => {

    const router = useRouter();
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const quoteId = searchParams.get('id');

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        quote: '',
        source: '',
    });

    useEffect(() => {
        const getQuoteDetails = async () => {
            const response = await fetch (`/api/quote/${quoteId}`)
            const data = await response.json();

            setPost({
                quote: data.quote,
                source: data.source,
            })
        }

        if(quoteId) getQuoteDetails()
    }, [quoteId])

    const updateQuote = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if(!quoteId) return alert('quote id not found');

        try {
            const response = await fetch(`/api/quote/${quoteId}`,
                {
                    method: 'PATCH',
                    body: JSON.stringify({
                        quote: post.quote,
                        source: post.source
                    })
                })

                if (response.ok) {
                    router.push('/');
                }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <Form
          type="edit"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={updateQuote}
        />
    )
}

export default EditQuote;