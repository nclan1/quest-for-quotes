
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='orange_gradient'>
                    {type}
                </span> post
            </h1>
            <p className='desc text-left max-w-md'>
                and share quotes in the world 
            </p>

            <form
              onSubmit={handleSubmit}
              className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
                <label>
                    <span className='font-satoshi font-semibold text-base text-black-700'>
                        quote to share
                    </span>

                    <textarea
                      value={post.quote}
                      onChange={(e) => setPost({ ...post, quote: e.target.value})}
                      placeholder='write your quote here'
                      required
                      className='form_textarea'/>
                </label>
            </form>
            <form
              onSubmit={handleSubmit}
              className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
                <label>
                    <span className='font-satoshi font-semibold text-base text-black-700'>
                        from where?
                    </span>

                    <input
                      value={post.source}
                      onChange={(e) => setPost({ ...post, source: e.target.value})}
                      placeholder='source'
                      required
                      className='form_input'/>
                </label>

                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href="/" className='text-black-500 text=sm'>
                        cancel
                    </Link>

                    <button className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"type="submit" disabled={submitting}>
                        {submitting ? "adding..." : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form