import { useState, useEffect } from 'react';

export default function Practice() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error("Failed to fetch data:", err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-20 text-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Practice Exercises</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div key={card.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.body}</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700 transition">
                  Try Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
