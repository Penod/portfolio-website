import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "R", "SQL", "Bash"],
      icon: "💻"
    },
    {
      title: "Frameworks & Tools",
      skills: ["Flask", "Scikit-learn", "XGBoost", "Tableau", "Hugging Face"],
      icon: "🛠️"
    },
    {
      title: "Cloud & MLOps",
      skills: [
        "AWS (Glue, SageMaker, ECS, CloudWatch, ECR, Lambda)",
        "Docker", 
        "Git", 
        "Terraform"
      ],
      icon: "☁️"
    },
    {
      title: "Core Concepts",
      skills: [
        "Machine Learning",
        "Statistical Modeling",
        "Data Visualization",
        "Model Deployment", 
        "MLOps",
        "CI/CD",
        "Feature Engineering"
      ],
      icon: "🎯"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Machine Learning Engineer – Associate",
      url: "https://www.credly.com/badges/29888fe1-11c5-40b4-986e-e3c53e54ab5b/linked_in_profile",
      issuer: "AWS"
    },
    {
      name: "AWS Certified AI Practitioner Early Adopter",
      url: "https://www.credly.com/badges/1304774c-697c-4985-9537-c61babb2758d/linked_in_profile",
      issuer: "AWS"
    },
    {
      name: "AWS Certified AI Practitioner",
      url: "https://www.credly.com/badges/4edd9a69-635f-46d3-91da-81770fd1d4a4/linked_in_profile",
      issuer: "AWS"
    },
    {
      name: "AWS Well-Architected Proficient",
      url: "https://www.credly.com/badges/7ea302ba-14c7-4032-a690-fb32fc44a16c/public_url",
      issuer: "AWS"
    },
    {
      name: "Migration and Modernization on AWS (BeSA)",
      url: "https://besa.techcreator.io/certification/emmanueldonkoh1167995/migration-and-modernization-on-aws-4d13fd",
      issuer: "AWS"
    },
    {
      name: "Docker Foundations",
      url: "https://www.linkedin.com/learning/certificates/376c800c838820b2b3fbf06f28439c368554036966224d11ffc7fc87374cc5ec",
      issuer: "Docker"
    },
    {
      name: "Google Project Management",
      url: "https://www.credly.com/go/a4F8K7eq",
      issuer: "Google"
    },
    {
      name: "Google Data Analytics",
      url: "https://www.credly.com/go/vYYKH75J",
      issuer: "Google"
    },
    {
      name: "Google IT Support",
      url: "https://www.credly.com/badges/2be18b89-6c12-472d-a227-61a6c3a02b1a/public_url",
      issuer: "Google"
    },
    {
      name: "Tableau Business Intelligence Analyst",
      url: "https://www.coursera.org/account/accomplishments/specialization/PAZFN9LONC9O",
      issuer: "Tableau"
    },
    {
      name: "Python for Data Science and AI",
      url: "https://www.credly.com/badges/6fea31d8-0b87-46b5-9b71-fcccc9e0d833/linked_in_profile",
      issuer: "IBM"
    },
    {
      name: "Advanced NLP with Python for Machine Learning",
      url: "https://www.linkedin.com/learning/certificates/5e8914e04dbe6613719b8ee0176c933cf798c9bbe5b2d70268c665cd894d744f",
      issuer: "LinkedIn"
    },
    {
      name: "Artificial Intelligence Foundations: Machine Learning",
      url: "https://www.linkedin.com/learning/certificates/6719728a1d4f5c053644079fcd6ce984bf91293ef28fc449167677f09c17ae69",
      issuer: "LinkedIn"
    },
    {
      name: "McKinsey Forward Program",
      url: "https://www.credly.com/badges/2c011842-9ef9-4399-b588-f34448e29991/linked_in_profile",
      issuer: "McKinsey"
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical skills and professional certifications in machine learning, cloud infrastructure, and data analytics
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Professional Certifications</h3>
            <p className="text-gray-600">Industry-recognized credentials validating expertise in cloud, AI, and data technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <a
                key={index}
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 hover:shadow-md group"
              >
                <span className="text-green-500 mr-3 mt-1">✅</span>
                <div>
                  <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors">
                    {certification.name}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">{certification.issuer}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* AWS Specialization Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-2xl shadow-lg">
            <span className="text-2xl">🏆</span>
            <div className="text-left">
              <p className="font-bold text-lg">AWS re:Invent All Builders Welcome Grant Recipient 2025</p>
              <p className="text-sm opacity-90">Recognized among top builders in AWS ecosystem</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;