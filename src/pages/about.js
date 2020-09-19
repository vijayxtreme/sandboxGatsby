import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import aboutUs from "../images/about-us.png"
import aboutUs1 from "../images/about-us-1.png"
import HearFromYouForm from "../components/forms/hearfromyou"
import HeroImageContainer from '../components/heroImage'

//SEO
let title = `Prostate Specialists | Leaders in Prostate Imaging`
let desc = `Co-directors Dr. Robert Princenthal and Dr. Martin Cohen lead a team of prostate specialists that has performed more prostate MRI exams than any group in the country.`

export default () => {
    return (
        <>
            <Layout page={title} desc={desc}>
                <section>
                    <HeroImageContainer imageUrl={aboutUs} />
                    <div className="container-inner-xs container-inner-m container-inner pt4 mb7">
                        <h2 className="mb0">Get to Know RadNet</h2>
                        <p>RadNet has been a national leader in providing high quality, cost-effective diagnostic imaging services for over 35 years. We are dedicated to advancing early detection of disease and to empowering patients to take charge of their health.</p>
                        <p>RadNet centers perform over 7 million imaging exams annually, through a network of over 340 imaging centers across 6 states. We are ACR accredited and we provide advanced imaging modalities, subspecialty expertise, technological innovations, state-of-the-art equipment and current research.</p>
                        <p>RadNet was one of the first radiology practices in the United States to establish a dedicated Prostate Program. Under the stewardship of co-directors Dr. Robert Princenthal and Dr. Martin Cohen, our team of specialists has performed more prostate MRI exams than any group in the country and outcome audits have shown our accuracy meets or exceeds top academic centers worldwide. This level of knowledge and insight results in accurate, relevant, and clinically significant reports for patients and their doctors.</p>

                        <h2 className="mt5 mb0">Leadership Team</h2>
                        <p><Link to='/radiologist/robert-princenthal-md/'>Robert Princenthal, M.D.</Link> is a board-certified radiologist with more than 25 years of experience. He is president and founding partner of Rolling Oaks Radiology, a network of outpatient imaging centers in Ventura County, California, and also serves as the medical co-director for RadNet’s Prostate MRI Program.</p>

                        <p>Dr. Princenthal has been instrumental in establishing one of the most robust prostate MRI practices in the nation. The prostate MRI program at RadNet has grown to become one of the largest, most experienced practices in the country with over 10,000 prostate MRI exams performed and interpreted.</p>

                        <p>In addition to his clinical knowledge interpreting MRI prostate studies, Dr. Princenthal has numerous prostate MRI publishing credits that have advanced evidence-based medicine’s ability to screen and stage prostate cancer. He has also led many highly regarded presentations, including a national webinar for Phillips. Dr. Princinthal also frequently lectures about prostate MRI to cancer support groups such as local American Cancer Society (ACS) Man 2 Man programs, Us TOO International Prostate Cancer Education & Support Network chapter meetings and Cancer Support Community (Valley/Ventura/Santa Barbara).</p>

                        <p>Dr. Princenthal is a member of the AdMeTech Foundation Prostate Cancer Leadership Committee and, along with Dr. Martin Cohen and the RadNet Prostate MRI Program, has been a sponsor for the Prostate Cancer Conference since 2010 (Prostate Cancer Research Institute).</p>

                        <p>Dr. Princenthal received his medical degree from Penn State University College of Medicine, Hershey Medical Center (Hershey, PA). He completed his internship at Hartford Hospital (Hartford, CT) and his residency in diagnostic radiology at the Yale University School of Medicine, Yale-New Haven Hospital (New Haven, CT).</p>

                        <p>Dr. Princenthal refined his craft as a radiologist by completing a fellowship in CT, ultrasound, interventional radiology and angiography at the University of California, San Diego. He has a hospital affiliation with Thousand Oaks Surgical Hospital (Thousand Oaks, CA).</p>
                        <p className='tc mt6 mb6'><img src={aboutUs1} alt="Robert Princenthal, MD (Right), Martin Cohen, MD (Left)"/></p>
                        <p><Link to="/radiologist/martin-cohen-md/">Martin Cohen, M.D.</Link> is the co-director of our Prostate MRI Program. Dr. Cohen has more than 25 years of experience as a radiologist and practices primarily at Rolling Oaks Radiology.</p>
                        <p>Dr. Cohen received his medical degree with highest honors from the Honors Program in Medical Education at Northwestern University in Chicago. He stayed on at Northwestern where he completed his residency in CT, MRI, general radiology and ultrasound. He was selected to be Chief Resident for the program during his final year. He received advanced training from the University of California, San Diego as a fellow in Sectional Imaging and Interventional Radiology. Additionally, Dr. Cohen completed a PET Mini Fellowship at the University of California, Los Angeles.</p>

                        <p>Dr. Cohen has built partnerships with medical device companies to offer our patients some of the most advanced screening and staging techniques available. Working with Program co-Director Dr. Robert Princenthal, Rolling Oaks Radiology Thousand Oaks was one of the first centers in the nation to have Invivo Corporation computer assisted detection (CAD) software in 2008. The facility was also selected to be among the first practices to investigate Inviovo’s stereotactical biopsy device.</p>

                        <p>In addition to his clinical knowledge, Dr. Martin Cohen is committed to working with non-profit organizations to increase public awareness about prostate cancer. He regularly attends prostate cancer conventions and frequently provides updates on the latest advancements in prostate cancer research to interest community organizations.</p>

                        <p>Dr. Cohen has played an active role in the Radiological Society of North America, American College of Radiology, California Radiological Society and the Society of Interventional Radiology, amongst other medical associations. He is licensed to practice medicine in Arizona, California and Illinois.</p>
                        <h3 className="pt3"><Link to="our-team">Meet Our Team of Experts &rarr;</Link></h3>
                        <HearFromYouForm />
                    </div>
                </section>
            </Layout>
        </>
     )
 }
