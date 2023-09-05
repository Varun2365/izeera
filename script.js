<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="responsive.css">
    <script src="https://unpkg.com/scrollreveal"></script>

</head>

<body>
    <div class="mobile-menu" id="ham">
        <div class="cross"><button class="cross-btn" onclick="hideMenu()"></button></div>
        <div class="mobile-links">
            <ul>


                <a href="#" onclick="hideMenu()">
                    <li>CASES</li>
                </a>
                <a href="#" onclick="hideMenu()">
                    <li>SERVICES</li>
                </a>
                <a href="#" onclick="hideMenu()">
                    <li>BLOG</li>
                </a>
                <a href="#" onclick="hideMenu()">
                    <li>ABOUT US</li>
                </a>
                <a href="#contact" onclick="hideMenu()">
                    <li>CONTACT</li>
                </a>


            </ul>
        </div>
    </div>
    <nav class="nav">
        <div class="logo">
            <h2>iZEERA</h2>
        </div>
        <div class="links">
            <UL>
                <a href="#">
                    <li>CASES</li>
                </a>
                <a href="#">
                    <li>SERVICES</li>
                </a>
                <a href="#">
                    <li>BLOG</li>
                </a>
                <a href="#">
                    <li>ABOUT US</li>
                </a>
                <a href="#contact">
                    <li>CONTACT</li>
                </a>
                <a href="#"><button>HIRE US</button></a>
            </UL>
        </div>
        <div class="ham" onclick="showMenu()"></div>
    </nav>

    <div class="hero">
        <div class="hero-left">
            <h4 class="left-hero">Hello There!</h4>
            <h1 class="first transit heading-roll">Transforming Concepts Into</h1>
            <h1 class="second transit heading-2"><span id="click"> Click-Worthy</span> Reality!</h1>
            <p class="para">Get started with us and get the most loving experience and services with our professional
                Team!
            </p>


            <a href="#lightning-results" class="get">
                Get Started
            </a>

        </div>
        <div class="hero-right right"></div>
    </div>
    <div class="lightning-results" id="lightning-results">
        <div class="lightning-results-left desk"></div>
        <div class="lightning-results-right">
            <h1 class="heading-roll results">
                <div class="hr"></div>Lightning fast results...
            </h1>
            <!-- <h2>Lightning fast result</h2> -->
            <div class="lightning-results-left mobile"></div>
            <p class="text para">Nowadays, the internet can no longer be ignored. There are a lot of opportunities to
                grow. Think of
                findability in Google, a good social strategy or the right email marketing. Nowadays every company has a
                website, but it does not always achieve optimal results. For example, we often see companies passing by
                where people consistently invest in different types of marketing communications, but how much result is
                not measured. <br><br> There are plety of techniques to grow your business online, but only the right
                strategy will yield the result for you. But which strategy should you choose? At iZeera, we understand
                that it is difficult to set up and implement the right marketing strategy. That is why we take the time
                to advise and guide you without obligation. Where companies think that only a website is sufficient,
                much more can be achieved by optimizing the findability of the comapany. Feel free to contact our online
                marketing agency for an advisory meeting.</p>
            <button class="light-btn text">
                <p>Get In Touch >>></p>
            </button>
        </div>
    </div>
    <div class="services">
        <div class="service-head">
            <h1 class="service-heading"><span id="our">Our </span>Services</h1>
            <p class="service-heading">At iZEERA, we provide various tech services that will definitely help you out in
                growing your business or getting your work done!</p>
        </div>
        <div class="services-card-section">
            <div class="service-card">
                <div class="card-image web"></div>
                <div class="card-heading">Web-Designing</div>
                <div class="card-text">At iZEERA, we design and create websites that suits your need!</div>
                <button class="learn-more">Learn More</button>
            </div>
            <div class="service-card">
                <div class="card-image seo"></div>
                <div class="card-heading">SEO</div>
                <div class="card-text">Boost your page rankings and get recognized with best in class SEO experts at
                    iZEERA</div>
                <button class="learn-more">Learn More</button>
            </div>
            <div class="service-card">
                <div class="card-image graphics"></div>
                <div class="card-heading">Graphics Designing</div>
                <div class="card-text">At iZEERA, we design graphics, banners for your social media handles!</div>
                <button class="learn-more">Learn More</button>
            </div>
        </div>
    </div>
    <div class="tech">
        <h1>Technologies We Use!</h1>
        <div class="tech-container">
            <div class="web-tech">
                <div class="group swap">
                    <div class="web-card html"></div>
                    <div class="web-card css"></div>
                </div>
                <div class="group">
                    <div class="web-card js"></div>
                    <div class="web-card figma"></div>
                </div>
                <div class="group">
                    <div class="web-card ai"></div>
                    <div class="web-card node"></div>
                </div>
                <div class="group">
                    <div class="web-card bs"></div>
                    <div class="web-card vs"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="why-choose">
        <div class="why-left">

            <h1 class="choose">Why Choose Us?</h1>
            <div class="why-card-section">
                <div class="why-card">
                    <div class="why-img"></div>
                    <div class="why-head">
                        <h4>Proactive Communication</h4>
                    </div>
                    <div class="why-text">
                        <p>

                            In the digital world, staying updated is key. We believe in maintainging open channels of
                            communication, providing you with regular progress updates, and ensuring you're always in
                            the loop.
                        </p>
                    </div>
                </div>
                <div class="why-card">
                    <div class="why-img cost"></div>
                    <div class="why-head">
                        <h4>Affordable & Scalable Services</h4>
                    </div>
                    <div class="why-text">
                        <p>

                            Quality shouldn't break the bank. Our competitive pricing ensures that businesses of all
                            sizes can benifit from our services. As your business grows, our services can scale with
                            you.
                    </div>
                    </p>
                </div>
                <div class="why-card">
                    <div class="why-img exp"></div>
                    <div class="why-head">
                        <h4>Cutting Edge Technology</h4>
                    </div>
                    <div class="why-text">
                        <p>

                            Technology and trends evolve, and so do we. We're committed to continuos learning, ensuring
                            we're always equipped with the latest tools and techniques to keep your brand ahead of the
                            curve.
                    </div>
                    </p>
                </div>
                <div class="why-card">
                    <div class="why-img experts"></div>
                    <div class="why-head">
                        <h4>Many services under one roof</h4>
                    </div>
                    <div class="why-text">
                        <p>
                            At iZEERA, we provide services related to web development,Graphics Designing and SEO
                            solutions.Which will definitely help you alot in achieving your business goals.
                    </div>
                    </p>
                </div>
                <div class="why-card">
                    <div class="why-img future"></div>
                    <div class="why-head">
                        <h4>Trusted By Many</h4>
                    </div>
                    <div class="why-text">
                        <p>

                            Our extensive portfolio and a long list of sarisfied clients stand testament to our
                            consistent delivery of exceptional results. In a digital age where first impressions are
                            often the last, partnering with a team that has the right mix of skills, dedication and
                            passion is curcial. Let us help you create a lasting digital impression. Choose us and let's
                            co-create digital magic!
                    </div>
                    </p>
                </div>
                <div class="why-card">
                    <div class="why-img talent"></div>
                    <div class="why-head">
                        <h4>Client-Centric Approach</h4>
                    </div>
                    <div class="why-text">
                        <p>

                            Your satisfaction is our primary metric of success. We work closely wih you, valuing your
                            feedback at every step, ensuring the end result is exactly or better than what you
                            envisioned.
                    </div>
                    </p>
                </div>
            </div>
        </div>
        <div class="why-right"></div>
    </div>
    <div class="contact" id="contact">
        <div class="contact-left">
            <!-- <h1 class="feel">Feel Free to Contact!</h1> -->
            <h1 class="contact-head">Feel Free to Contact!</h1>
        </div>
        <div class="contact-right">
            <form action="">
                <input type="text" name="name" id="name" placeholder="Your Name...." value="" class="form-reveal">
                <input type="text" name="mail" id="mail" placeholder="Your email id...." class="form-reveal">
                <input type="text" name="phone" id="phone" placeholder="Your phone number...." class="form-reveal">
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Your query...." id="query"
                    class="form-reveal"></textarea>
            </form>
            <div class="button-div">
                <button type="" class="button" id="submit-button" class="form-reveal"
                    onclick="sendMail()">SUBMIT</button>
                <button type="reset()" class="button" onclick="formReset()">RESET</button>

            </div>
        </div>
    </div>
    <div class="footer-cont">
        <div class="foot-left"
            style="width: 100%; height: 300px; background-image: url('assets/icons/footer-bg.svg');background-size: cover;background-position: bottom; transform: translateY(1vh);">
        </div>
        <div class="foot-right">


            <footer class="footer">
                <!-- <div style= " display: flex; justify-content: center; align-items: center;width: 100%;"> -->
                <div class="footer-right">
                    <div class="footer-card">
                        <h5>External Links</h5>
                        <a href="#">About</a>
                        <a href="#">Blogs</a>
                        <a href="#">Cases</a>
                        <a href="#">Hire Us</a>
                        <a href="#">SEO</a>
                        <a href="#">Web Development</a>
                        <a href="#">Graphics Designing</a>
                    </div>
                    <div class="footer-card">
                        <h5>Contact Us</h5>

                        <p class="low-margin">Hisar: +91 8570978316</p>
                        <p class="low-margin">Kurukshetra: +91 9991448836</p>
                        <p>Email us at: info@izeera.in</p>
                    </div>
                    <div class="footer-card">
                        <h5>Address</h5>
                        <p> 1). WRXF+23g, National Instuture of Technology, Thanesar, Kurukshetra, Haryana - 136119</p>
                        <p> 2). Guru Jambheshwar University of Science & Tecnnology, Hisar, Haryana - 125001</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <div class="end">&copy; Copyright iZeera @ 2023</div>
    <script src="script.js"></script>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
        var submit = document.getElementById('submit-button')
        var send = document.getElementById('submit-button');

        function sendMail() {
            var name = document.getElementById('name').value;
            var mail = document.getElementById('mail').value;
            var phone = document.getElementById('phone').value;
            var msg = document.getElementById('w3review').value;
            var body = "NAME: " + name + "<br>" + "MAIL: " + mail + "<br>" + "PHONE: " + phone + "<br>" + "MSG: " + msg;
            var permit = validate(name, phone, mail, msg);
            if (permit == 0) {
                alert("Please fill complete form again!");
            }
            else if (permit == 1) {
                console.log("SENDING FORM")
                Email.send({
                    SecureToken: "0e7195ab-4412-45ca-8944-6b3c9d82111d",
                    To: 'varun2365scifi@gmail.com',
                    From: "varun2365scifi@gmail.com",
                    Subject: "iZEERA QUERY",
                    Body: body
                }).then(
                    message => alert("We will Contact You Soon! \nHave a great Day!")
                );
            }
        }
        function getHeight() {

            divElement = document.querySelector(".why-left");

            elemHeight = divElement.offsetHeight;

            return elemHeight + "px"
        }
        document.querySelector(".why-right").style.height = getHeight();
        function formReset() {
            var form = document.querySelector("form");
            form.reset();
        }
        var ham = document.getElementById("ham")
        function showMenu() {
            ham.style.display = "flex";
            setTimeout(() => {

                ham.style.transform = 'translateX(0)';
            }, 200);
        }
        function hideMenu() {
            ham.style.transform = 'translateX(100%)';
            setTimeout(() => {
                ham.style.display = "none";
            }, 200);
        }

    </script>
</body>

</html>
