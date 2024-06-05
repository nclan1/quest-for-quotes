
'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';
import { Router } from 'next/router';

const CreateQuote = () => {

    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        quote: '',
        source: '',
    });

    const createQuote = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("/api/quote/new",
                {
                    method: 'POST',
                    body: JSON.stringify({
                        quote: post.quote,
                        userId: session?.user.id,
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
          type="create"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={createQuote}
        />
    )
}

export default CreateQuote;