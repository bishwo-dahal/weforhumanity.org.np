<template>
    <div class="profile-list">
        <h3 class="text-center text-3xl pb-5">Meet our Team</h3>
      <div class="profile-container">
        <div class="profile-card" v-for="(profile, index) in profiles" :key="index">
          <g-image class="avatar" :src="profile.avatarUrl || '/images/team/placeholder.jpg'" :alt="profile.name" />
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
            name: "Birkha Gubaju",
            post: "President",
            description: "Birkha Gubaju",
            avatarUrl: "/images/team/birkha_gubaju.jpg",
          },
          {
            name: "Prabesh Thapa",
            post: "Vice President",
            description: "Prabesh Thapa",
            avatarUrl: "/images/team/prabesh_thapa.jpg",
          },
          {
            name: "Sarita Moktan Tamang",
            post: "Secratary",
            description: "Sarita Tamang",
            avatarUrl: "/images/team/sarita_moktan.jpg",
          },
          {
            name: "Bishwo Dahal",
            post: "Developer",
            description: "Bishwo Dahal is Computer Science student at University of Louisiana at Monroe with strong passion for developing software solutions. Proficient in computing technologies, Bishwo has gained hands-on experience in companies including Oak Ridge National Laboratory and NepalEx parcels and Logistics. Here at WFH, he is working to enhance the organization's online presence and secure funding opportunities. ",
            avatarUrl: "/images/team/bishwo_dahal.jpeg",
          },
          {
            name: "Kopila Shrestha",
            post: "Treasurer",
            description: "Kopila Shrestha",
            avatarUrl: "/images/team/kopila_shrestha.jpg",
          },
          {
            name: "Jyoti Karki",
            post: "Member",
            description: "Jyoti Karki",
            avatarUrl: "/images/team/jyoti_karki.jpg",
          },
          {
            name: "Bipin Subedi",
            post: "Member",
            description: "Bipin Subedi",
            avatarUrl: "/images/team/bipin_subedi.jpg",
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
    flex: 1 1 300px; /* Make cards bigger and responsive */
    max-width: 400px;
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
  