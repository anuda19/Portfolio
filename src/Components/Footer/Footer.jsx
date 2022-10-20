import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer class="footer_main mt-5">
        <h3 class=" text-center pt-2">Digi Serves</h3>
        <p class=" text-center">Visit Help Center</p>
        <div class="footer_mid">
            <div class="account">
                <h4>Account</h4>
                <p>Wallet</p>
                <p>Payments</p>
                <p>Refers & Earn</p>
                <p>Sopport</p>
                <p>FAQ</p>
                <p>Rate us on the Play Store</p>
            </div>
            <div class="company">
                <h4>Company</h4>
                <p>About Us</p>
                <p>Our Offerings</p>
                <p>Blog</p>
                <p>Career</p>
                <p>Gift Cards</p>
            </div>
            <div class="products">
                <h4>Products</h4>
                <p>Web Development</p>
                <p>Digital Marketing</p>
                <p> SEO Optimisation</p>
                <p>UI/UX Design</p>
                <p>Domain & Hosting</p>
                <p>Business Strategy</p>
            </div>
        </div>
        <h6 className='text-light text-center'>Copyright <span className='footer_logo'>&copy;</span> All Right Reserved by <span className='footer_logo'>Digi Serves</span> Pvt. Ltd.</h6>
    </footer>
  )
}

export default Footer