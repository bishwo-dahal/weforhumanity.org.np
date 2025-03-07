<template>
    <div class="profile-list">
        <h3 class="text-center text-3xl pb-5">Meet our Team</h3>
      <div class="profile-container">
        <div class="profile-card" v-for="(profile, index) in profiles" :key="index">
          <a :href="profile.link">

            <g-image class="avatar" :src="profile.avatarUrl || '/images/team/placeholder.jpg'" :alt="profile.name" />
          </a>
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
            link:"https://www.facebook.com/gubhaju.birkha",
            description: "Birkha Gubaju is the current president of We For Humanity, a community-driven organization dedicated to making a positive impact. Alongside his leadership role, he is actively involved in the teaching profession, sharing his knowledge to students in Dolakha, Nepal",
            avatarUrl: "/images/team/birkha_gubaju.jpg",
          },
          {
            name: "Prabesh Thapa",
            post: "Vice President",
            link:"https://www.facebook.com/Thaprabesh35",
            description: "Prabesh Thapa, vice president of We For Humanity, is passionate about community service. With a background in construction projects, he is actively involved in developing infrastructures and architectures in Charikot, Dolakha Nepal.",
            avatarUrl: "/images/team/prabesh_thapa.jpg",
          },
          {
            name: "Sarita Moktan Tamang",
            post: "Secratary",
            link:"https://www.facebook.com/sawreetaa.moktan",
            description: "Sarita Moktan Tamang is the secretary of We For Humanity and is passionate about helping others. She works as a teacher and is dedicated to both education and community support.",
            avatarUrl: "/images/team/sarita_moktan.jpg",
          },
          {
            name: "Kopila Shrestha",
            post: "Treasurer",
            link:"https://www.facebook.com/profile.php?id=100012532001702",
            description: "Kopila Shrestha is the treasurer of We For Humanity, handling its finances. She also works as a teacher and stays involved in community activities.",
            avatarUrl: "/images/team/kopila_shrestha.jpg",
          },
          {
            name: "Bishwo Dahal",
            post: "Developer & Fundraising Coordinator",
            link:"https://www.bishwodahal.com/",
            description: "Bishwo Dahal is a Computer Science student at the University of Louisiana at Monroe with a strong passion for software development. He has gained experience at companies like Oak Ridge National Laboratory and NepalEx and is now helping We For Humanity improve its online presence and secure funding. ",
            avatarUrl: "/images/team/bishwo_dahal.jpeg",
          },

          {
            name: "Jyoti Karki",
            post: "Member",
            link:"https://www.facebook.com/profile.php?id=100041225693897",
            description: "Jyoti Karki is a member of We For Humanity. She works in the banking sector and supports the organization’s efforts to help the community.",
            avatarUrl: "/images/team/jyoti_karki.jpg",
          },
          {
            name: "Bipin Subedi",
            post: "Member",
            link:"https://www.facebook.com/bipin.subedi.39",
            description: "Bipin Subedi is a dedicated member of We For Humanity. He works in online teaching, helping students grow while also pursuing his passion for music.",
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
  