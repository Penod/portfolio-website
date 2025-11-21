import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            I am a Machine Learning Engineer and Data Scientist passionate about 
            leveraging technology to solve complex, real-world problems.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            My work centers on building end-to-end ML pipelines, deploying scalable 
            solutions on AWS, and extracting actionable insights through advanced 
            analytics and statistical modeling. I have a strong foundation in 
            mathematics and cloud technologies, bolstered by my recent Master's degree in 
            Mathematics and Staistics. 
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I am a lifelong learner, committed to staying at the forefront of the field.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Machine Learning
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              AWS Cloud
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              Data Science
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              ML Pipelines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;