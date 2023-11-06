
<script setup>
import Axios from "axios";
const url = ""
const account = ""
// definePageMeta({
//     layout: "db",
// });
console.log(account);
const form = reactive({
    first_name: '',
    last_name: '',
    email: '',
    subject: "",
    message: "",
});
const send_feedback = async (e) => {
    if (form.message == '' || form.subject == '') {
        alert('All fields are required, fill them out')
        return false
    }
    document.getElementById('sbtn').disabled = true
    const res = await Axios.post(`${url}contact/`, form);
    if (res.data) {
        alert('Message sent, we will get back to you as quick as possible!!')
        e.target.reset()
        document.getElementById('sbtn').disabled = false
    }
}
</script>
<template>
    <div class="w-screen h-screen  relative border">
        <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <video src="~/assets/media/contact-bg.mp4" autoplay loop class="h-full w-full object-cover">
        </video>
        <div class="flex justify-center absolute z-30 bottom-[30%] w-full left-0 ">
            <div
                class=" text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl w-full mx-3  bg-green-700/50 px-5 py-12">
                <h1 class="text-5xl font-bold my-3">Contact Us</h1>
                <p class="text-xl font-semibold ">Do you have any queries or suggestions? Please contact us about all
                    enquiries including membership and volunteer work using the form below.</p>
            </div>
        </div>

    </div>


    <!-- </div> -->

    <div class="flex justify-center xl:px-20 lg:px-14 md:px-10 sm:px-8 px-5">

        <div class=" py-2 w-full">

            <div class="contact_info -mt-10">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class=" !flex lg:!flex-row !flex-col justify-between align-center">

                                <!-- Contact Item -->
                                <div class="contact_info_item !flex flex-row items-center justify-start">
                                    <div class="contact_info_image"><img
                                            src="https://img.icons8.com/office/24/000000/iphone.png" alt=""></div>
                                    <div class="contact_info_content">
                                        <div class="contact_info_title">Phone</div>
                                        <div class="contact_info_text">+1 401 594 9299</div>
                                    </div>
                                </div>

                                <!-- Contact Item -->
                                <div class="contact_info_item !flex flex-row items-center justify-start">
                                    <div class="contact_info_image"><img
                                            src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="">
                                    </div>
                                    <div class="contact_info_content">
                                        <div class="contact_info_title">Email</div>
                                        <div class="contact_info_text ">
                                        <a href="mailto:service@digitalassets.com.ng">service@digitalassets.com.ng</a></div>
                                    </div>
                                </div>

                                <!-- Contact Item -->
                                <div class="contact_info_item !flex flex-row items-center justify-start">
                                    <div class="contact_info_image"><img
                                            src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt=""></div>
                                    <div class="contact_info_content">
                                        <div class="contact_info_title">Address</div>
                                        <div class="contact_info_text">service@digitalassets.com.ng</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->

            <div class="contact_form" ng-controller="contactform">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="contact_form_container">
                                <div class="contact_form_title">Get in Touch</div>

                                <form id="contact_form" @submit.prevent="send_feedback($event)">
                                    <div
                                        class="contact_form_inputs !flex lg:!flex-row !flex-col justify-between lg:gap-2 gap-4">
                                        <div class="!w-full">
                                            <label for="" class="block">First Name</label>
                                            <input type="text" id="" placeholder="First Name"
                                                class="contact_form_name input_field !w-full bg-transparent !border-0  ring-1 ring-primary-hover"
                                                v-model="form.first_name" required="required"
                                                data-error="Name is required.">
                                        </div>

                                        <div class="!w-full">
                                            <label for="" class="block">Last Name</label>
                                            <input type="email" id="" placeholder="Last Name"
                                                class="contact_form_email input_field !w-full bg-transparent ring-1 ring-primary-hover"
                                                v-model="form.last_name" required="required"
                                                data-error="Email is required.">
                                        </div>

                                        <div class="!w-full">
                                            <label for="" class="block">Email</label>
                                            <input type="text" id="" placeholder="Email Address"
                                                class="contact_form_phone input_field !w-full  bg-transparent ring-1 ring-primary-hover"
                                                v-model="form.email">
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="">Subject</label>
                                        <input type="text" id=""
                                            class="contact_form_phone input_field !w-full  bg-transparent ring-1 ring-primary-hover"
                                            v-model="form.subject" placeholder="subject" required>
                                    </div>

                                    <div class="contact_form_text">
                                        <label for="" class="block">Message</label>
                                        <textarea id="contact_form_message"
                                        class="text_field contact_form_message  bg-transparent ring-1 ring-primary-hover"
                                        rows="4" placeholder="Message" required="required"
                                        data-error="Please, write us a message." v-model="form.message">
                                       </textarea>
                                </div>
                                <div class="contact_form_button">
                                    <button type="submit" class="mt-2  group mb-3 ring-2 max-w-sm w-full rounded-lg py-2
                                    ring-green-700 hover:ring-green-500 hover:ring-4 disabled:ring-0" id="sbtn">
                                        <i class="fas fa-spinner animate-spin !hidden group-disabled:!inline-block"></i>
                                        send message
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--  xxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxx-->

    </div>
</div>





    <!-- <section class="">
                    <div class="flex items-center justify-center py-8 mx-auto sm:py-0">
                        <div class="mt-[7%]  max-w-sm w-full px-3 overflow-x-hidden ">
                            <div class="bg-green-800/50 rounded-lg shadow text-center text-green-400
                            -translate-x-[400px] opacity-0 transition-all duration-500" id="alert">
                                <p class="text-xl mb-1">Thank You for contacting us!</p>
                                <small class="text-violet-200">Our customer service agent will get back to you as quick as
                                    possible</small>
                            </div>

                            <form @submit.prevent="send_feedback($event)">
                                <div>
                                    <div class="mt-7 mb-4">
                                        <label for="" class="text-primary-hover">Subject: </label>
                                        <input type="text" placeholder="subject" id=""
                                            class="w-full py-2 0 px-2 rounded-lg" v-model="form.subject" />
                                    </div>
                                    <label for="" class="text-primary-hover">Message: </label>
                                    <textarea name="" id="" cols="30" rows="5" v-model="form.message"
                                        class="w-full p-2 rounded-lg" placeholder="message"></textarea>
                                </div>
                                <btn type="submit" class="mt-2 w-full group mb-3" id="sbtn"> 
                                    <i class="fas fa-spinner animate-spin !hidden group-disabled:!inline-block"></i> send
                                     </btn>
                            </form>
                        </div>
                    </div>
                </section> -->
    <!-- </div>
        </div> -->
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Rubik:300,400,500,700,900');

* {

    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
}


/* div {
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
} */



h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
}


.button {
    display: inline-block;

    border-radius: 5px;
    height: 48px;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}

.button a {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;

    padding-left: 35px;
    padding-right: 35px;
}

.button:hover {
    opacity: 0.8;
}

.contact_info {
    width: 100%;
    padding-top: 70px;
}

.contact_info_item {
    width: calc((100% - 60px) / 3);
    height: 100px;
    border: solid 1px #e8e8e8;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    padding-left: 10px;

    padding-right: 15px;
}

.contact_info_image {
    width: 35px;
    height: 35px;
    text-align: center;
}

.contact_info_image img {
    max-width: 100%;

}

.contact_info_content {
    padding-left: 1px;

}

.contact_info_title {
    font-weight: 500;
}

.contact_info_text {
    font-size: 12px;


}

/*********************************
4.1 Contact Form
*********************************/

.contact_form {
    padding-top: 40px;
}

.contact_form_container {}

.contact_form_title {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 17px;
}

.contact_form_inputs {
    margin-bottom: 30px;
}

.input_field {
    width: calc((100% - 60px) / 3);
    height: 50px;
    padding-left: 25px;
    border-radius: 5px;
    outline: none;

    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}





.input_field::-webkit-input-placeholder,
.text_field::-webkit-input-placeholder {
    font-size: 16px;
    font-weight: 400;

}

.input_field:-moz-placeholder,
.text_field:-moz-placeholder {
    font-size: 16px;
    font-weight: 400;

}

.input_field::-moz-placeholder,
.text_field::-moz-placeholder {
    font-size: 16px;
    font-weight: 400;

}

.input_field:-ms-input-placeholder,
.text_field:-ms-input-placeholder {
    font-size: 16px;
    font-weight: 400;

}

.input_field::input-placeholder,
.text_field::input-placeholder {
    font-size: 16px;
    font-weight: 400;

}

.text_field {
    width: 100%;
    height: 160px;
    padding-left: 25px;
    padding-top: 15px;

    border-radius: 5px;

    outline: none;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
}

.contact_submit_button {
    padding-left: 35px;
    padding-right: 35px;

    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 24px;
}


@media only screen and (max-width: 991px) {

    .contact_info_item {
        width: 100%;
        margin-bottom: 30px;
    }

    .contact_info_item:last-child {
        margin-bottom: 0px;
    }

}

@media only screen and (max-width: 767px) {

    .input_field {
        margin-bottom: 30px;
        width: 100%;
    }

    .input_field:last-child {
        margin-bottom: 0px;
    }
}


@media only screen and (max-width: 575px) {

    .contact_submit_button {
        font-size: 13px;
        padding-left: 25px;
        padding-right: 25px;
    }

}</style>



