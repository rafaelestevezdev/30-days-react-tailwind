import { useState } from 'react';

export function Suscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto text-center text-white max-w-md">
        <h2 className="text-3xl font-bold mb-4">Join the League</h2>
        <p className="text-lg mb-6">Subscribe to get the latest comic updates and exclusive offers.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-white border border-white/50"
            required
            placeholder="Enter your email..."
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}