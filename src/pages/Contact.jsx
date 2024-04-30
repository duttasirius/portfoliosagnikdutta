import React, { useRef , useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email:'', message: ''})
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  const handleSubmit = () => {
    e.preventDeafult();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICES_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Sagnik",
        from_email: form.email,
        to_email: 'contact@dutta.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);

    })
  }
  const handleFocus = () => {};
  const handleBlur = () => {};
 


  return (
  <section className="relative flex lg:flex-row flex-col max-cotainer">
    <div className="flex-1 min-w-52 flex-col">
      <h1 className="head-text">Get in Touch</h1>
    </div>
    <form className="w-full flex-col gap-7 mt-14" onSubmit={handleSubmit}>
      
      <label className="text-black font-semibold">
        Name
        <input type="text" name="name" className="input" placeholder="sagnik" required value={form.name}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
      </label>

      <label className="text-black font-semibold">
        Email
        <input type="email" name="email" className="input" placeholder="sagnik@gmail.com" required value={form.email}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
      </label>

      <label className="text-black font-semibold">
        Your Message
        <textarea  name="message" rows={4}  className="input" placeholder="let me know how i help you" required value={form.message}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
      </label>
      <button type="submit" className="btn p-5" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur} 
      
      >
        {isLoading ? 'Sending....' : 'Send Message' }
      </button>  

    
    </form>
   </section>
   
  )
}

export default Contact
