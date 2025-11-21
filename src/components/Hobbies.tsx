import React from 'react';

const Hobbies: React.FC = () => {
  const hobbies = [
    {
      id: 1,
      name: "Reading AI/ML Research Papers",
      description: "Staying updated with the latest advancements in machine learning and artificial intelligence",
      icon: "📚",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Documentaries",
      description: "Exploring educational documentaries about technology, science, and innovation",
      icon: "🎬",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Soccer",
      description: "Enjoying the beautiful game and staying active through sports",
      icon: "⚽",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Cooking",
      description: "Experimenting with new recipes and culinary techniques",
      icon: "👨‍🍳",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="hobbies" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Beyond Code</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring interests that fuel creativity and maintain work-life balance
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby) => (
            <div 
              key={hobby.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 text-center">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${hobby.color} flex items-center justify-center text-white text-3xl shadow-lg`}>
                  {hobby.icon}
                </div>
                
                {/* Hobby Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {hobby.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Note */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              "Balancing technical work with diverse interests helps maintain creativity and perspective. 
              Whether it's understanding cutting-edge AI research or enjoying a good soccer match, 
              these activities contribute to a well-rounded approach to problem-solving."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hobbies;