<template>
    <div class="profile-list">
        <h3 class="text-center text-3xl pb-5">Meet our Team</h3>
      <div class="profile-container">
        <div class="profile-card" v-for="(profile, index) in profiles" :key="index">
          <img class="avatar" :src="profile.avatarUrl" :alt="profile.name" />
          <div class="details">
            <h3>{{ profile.name }}</h3>
            <p class="post">{{ profile.post }}</p>
            <p class="description">{{ profile.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfileList",
    data() {
      return {
        profiles: [
          {
            name: "John Doe",
            post: "Software Engineer",
            description: "John is a passionate software engineer with over 10 years of experience in building scalable web applications. He specializes in frontend development and has a keen eye for creating responsive user interfaces.",
            avatarUrl: "https://via.placeholder.com/120",
          },
          {
            name: "Jane Smith",
            post: "Product Manager",
            description: "Jane is an experienced product manager with a strong background in leading cross-functional teams. She excels at strategic planning, project management, and delivering results that meet both customer needs and business goals.",
            avatarUrl: "https://via.placeholder.com/120",
          },
          {
            name: "Alice Johnson",
            post: "UI/UX Designer",
            description: "Alice is a creative UI/UX designer who focuses on creating intuitive and aesthetically pleasing user experiences. She works closely with developers to ensure designs are seamlessly implemented and enhance the overall usability of the product.",
            avatarUrl: "https://via.placeholder.com/120",
          },
          {
            name: "Bob Williams",
            post: "Data Scientist",
            description: "Bob is a data scientist with expertise in machine learning, data analysis, and statistical modeling. He leverages large datasets to generate insights that inform business decisions and improve product features.",
            avatarUrl: "https://via.placeholder.com/120",
          },
          {
            name: "Emily Brown",
            post: "DevOps Engineer",
            description: "Emily is a skilled DevOps engineer with a deep understanding of automating and streamlining development workflows. She works to ensure continuous integration and continuous delivery pipelines are optimized for maximum efficiency.",
            avatarUrl: "https://via.placeholder.com/120",
          },

        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .profile-list {
    padding: 20px;
  }
  
  .profile-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Align to left */
    gap: 20px;
  }
  
  .profile-card {
    flex: 1 1 250px; /* Make cards bigger and responsive */
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left; /* Align text to the left */
    transition: transform 0.3s ease;
  }
  
  .profile-card:hover {
    transform: scale(1.05); /* Slight hover effect */
  }
  
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid #1abc9c;
    margin-bottom: 15px;
  }
  
  .details h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #34495e;
  }
  
  .details .post {
    margin: 5px 0;
    font-size: 16px;
    color: #7f8c8d;
  }
  
  .details .description {
    font-size: 14px;
    color: #34495e;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .profile-card {
      flex: 1 1 100%; /* Stack profiles on small screens */
    }
  
    .avatar {
      width: 100px;
      height: 100px;
    }
  }
  </style>
  