'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from 'next/navigation';


const QuoteCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {


    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copied, setCopied] = useState("");
    const handleCopy = () => {
        console.log("copied");
        setCopied(post.quote);
        navigator.clipboard.writeText(post.quote);
        setTimeout(() => setCopied(""), 3000);
    }


    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                    <Image
                      src={post.creator.image}
                      alt="user_image"
                      width={40}
                      height={40}
                      className="rounded-full object-contain"
                    />

                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold">{post.creator.username}</h3>
                        <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
                    </div>
                </div>

                <div className="copy_btn" onClick={handleCopy}>
                    <img src={copied === post.quote
                           ? '/assets/icons/tick.svg'
                           : '/assets/icons/copy.svg'
                        }
                      width={12}
                      height={12}
                    />
                </div>
            </div>

            <p className="my-4 font-satoshi text-sm text-gray-700">{post.quote}</p>
            <p className="font-inter text-sm orange_gradient cursor-pointer"
               onClick={() => handleTagClick && handleTagClick}>
                {post.source}
            </p>

            {session?.user.id === post.creator._id && pathName === '/profile' && (
                <div className="mt-5 flex-center gap-4 border-t border-black-100 pt-3">
                    <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>
                        edit
                    </p>
                    <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>
                        delete
                    </p>
                </div>
            )}
        </div>
    )
}

export default QuoteCard
