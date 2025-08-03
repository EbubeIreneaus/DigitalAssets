<script setup>
onMounted(() => {
  AOS.refreshHard();
});
</script>
<template>
  <div>
    <div class="w-screen h-screen relative">
      <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <video
        src="~/assets/media/company-bg.mp4"
        autoplay
        loop
        class="h-full w-full object-cover"
      ></video>
      <div class="flex justify-center absolute z-30 bottom-[30%] w-full left-0">
        <div
          class="text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl w-full mx-3 bg-black/50 px-5 py-12 animate__animated animate__slideInUp text-white"
        >
          <h1 class="text-4xl font-bold my-3">Company Overview</h1>
          <p class="text-xl font-semibold">
            We’re here because more people across the economic spectrum deserve
            to live secure and rewarding lives.
          </p>
        </div>
      </div>
    </div>

    <div class="">
      <div
        class="grid sm:gap-5 md:gap-10 sm:grid-cols-2 md:px-24 my-10 px-3 shadow-md py-10"
      >
        <img
          src="~/assets/media/about.jpg"
          alt=""
          class="h-full w-full object-cover object-center"
          data-aos="fade-right"
        />
        <div class="" data-aos="fade-left">
          <h2
            data-aos="fade-up"
            class="text-orange-600 text-4xl font-extrabold mb-5 tracking-wider relative py-5 before:absolute before:border before:w-24 before:bottom-0 before:border-primary-hover text-center"
          >
            Welcome to Digital Assets
          </h2>
          <p data-aos="fade-up">
            At Digital Assets, we are committed to helping you navigate the
            world of cryptocurrency investments with confidence and ease. Our
            platform is designed to provide you with a secure and efficient way
            to grow your wealth through strategic digital asset management.
          </p>
          <h2
            class="text-2xl my-5 font-bold text-orange-600"
            data-aos="fade-down"
          >
            Who We Are
          </h2>
          <p data-aos="fade-up">
            Digital Assets was founded by a team of experienced financial
            experts and tech enthusiasts who recognized the immense potential of
            cryptocurrencies in shaping the future of global finance. With our
            in-depth knowledge of blockchain technology and investment
            strategies, we aim to empower individuals and businesses to make
            informed decisions in the ever-evolving landscape of digital assets.
          </p>
          <h2
            class="text-2xl my-5 font-bold text-orange-600"
            data-aos="fade-down"
          >
            Our Mission
          </h2>
          <p data-aos="fade-up">
            Our mission is to simplify the complexities of cryptocurrency
            investments, making it accessible to everyone, regardless of their
            background or expertise. We prioritize transparency, security, and
            user-centric services, ensuring that our clients have the necessary
            tools and resources to achieve their financial goals.
          </p>
          <h2
            class="text-2xl my-5 font-bold text-orange-600"
            data-aos="fade-down"
          >
            Our Commitment to Security
          </h2>
          <p data-aos="fade-up">
            Security is at the core of everything we do. We implement
            cutting-edge security measures and adhere to industry best practices
            to safeguard your investments and personal information. Rest assured
            that your funds are protected with the highest level of security
            protocols.
          </p>
        </div>
      </div>
    </div>

    
    <div class="my-5">
      <div class="py-14 bg-white">
        <div
          class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between"
        >
          <div class="sm:w-6/12 order-last sm:order-first">
            <ul
              class="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10"
            >
              <li class="bg-gray-100 p-5 py-10 text-center">
                <div class="flex flex-col items-center">
                  <div class="flex-shrink-0">
                    <a href="#"
                      ><img
                        class="mb-3 rounded-full mx-auto h-24 w-24"
                        src="~/assets/media/bradford.jpg"
                    /></a>
                  </div>
                  <div class="text-center">
                    <h4
                      class="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"
                    >
                      <a
                        href="#"
                        class="hover:text-indigo-600 transition duration-500 ease-in-out"
                        >Bradford West</a
                      >
                    </h4>
                    <p class="text-sm leading-6 text-gray-500 uppercase">
                      CEO / co-founder
                    </p>
                  </div>
                </div>
              </li>
              <li class="bg-gray-100 p-5 py-10 text-center">
                <div class="flex flex-col items-center">
                  <div class="flex-shrink-0">
                    <a href="#"
                      ><img
                        class="mb-3 rounded-full mx-auto h-24 w-24"
                        src="~/assets/media/john.jpg"
                    /></a>
                  </div>
                  <div class="text-center">
                    <h4
                      class="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"
                    >
                      <a
                        href="#"
                        class="hover:text-indigo-600 transition duration-500 ease-in-out"
                        >John Hicks</a
                      >
                    </h4>
                    <p class="text-sm leading-6 text-gray-500 uppercase">
                      CEO / Co-founder
                    </p>
                  </div>
                </div>
              </li>
              <li class="bg-gray-100 p-5 py-10 text-center">
                <div class="flex flex-col items-center">
                  <div class="flex-shrink-0">
                    <a href="#"
                      ><img
                        class="mb-3 rounded-full mx-auto h-24 w-24"
                        src="~/assets/media/samuel.png"
                    /></a>
                  </div>
                  <div class="text-center">
                    <h4
                      class="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"
                    >
                      <a
                        href="#"
                        class="hover:text-indigo-600 transition duration-500 ease-in-out"
                        >Ahmed Sani</a
                      >
                    </h4>
                    <p class="text-sm leading-6 text-gray-500 uppercase">
                      Trading Expert
                    </p>
                  </div>
                </div>
              </li>
              <li class="bg-gray-100 p-5 py-10 text-center">
                <div class="flex flex-col items-center">
                  <div class="flex-shrink-0">
                    <a href="#"
                      ><img
                        class="mb-3 rounded-full mx-auto h-24 w-24"
                        src="https://i.pravatar.cc/150?img=32"
                    /></a>
                  </div>
                  <div class="text-center">
                    <h4
                      class="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out"
                    >
                      <a
                        href="#"
                        class="hover:text-indigo-600 transition duration-500 ease-in-out"
                        >Alfred Nolan</a
                      >
                    </h4>
                    <p class="text-sm leading-6 text-gray-500 uppercase">
                      Trading Expert
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            class="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last"
          >
            <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
              THE TEAM
            </p>
            <h3
              class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900"
            >
              Meet Our <span class="text-orange-500">Team</span>
            </h3>
            <p class="mt-4 text-md leading-7 text-gray-500 font-light">
              At the heart of our company is a team of dedicated professionals
              who are passionate about what they do. Each member brings a unique
              set of skills and experiences, working collaboratively to deliver
              outstanding results.
              <br /><br />
              every individual plays an integral role in our success.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5">
      <use-count></use-count>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  img {
    object-fit: cover;
    object-position: center;
  }
}
</style>
