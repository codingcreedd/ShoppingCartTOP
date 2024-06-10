const Footer = () => {
  return (
    <footer className="px-14">
        <hr className="bg-black h-[2px] mb-1" />
        <hr className="bg-red-600 h-[2px] mb-1"/>
        <hr className="bg-green-600 h-[2px] mb-24"/>
        
        <div className="flex flex-col gap-8">
            <div className="flex gap-72">
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl mb-8 font-bold">Recources</h1>
                    <p className="text-lg text-gray-800">Gift Cards</p>
                    <p className="text-lg text-gray-800">Find a Store</p>
                    <p className="text-lg text-gray-800">Become a Member</p>
                    <p className="text-lg text-gray-800">Paleswear Journal</p>
                    <p className="text-lg text-gray-800">Site Feedback</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl mb-8 font-bold">Help</h1>
                    <p className="text-lg text-gray-800">Get Help</p>
                    <p className="text-lg text-gray-800">Order Status</p>
                    <p className="text-lg text-gray-800">Shipping and Delivery</p>
                    <p className="text-lg text-gray-800">Returns</p>
                    <p className="text-lg text-gray-800">Order Cancellation</p>
                    <p className="text-lg text-gray-800">Payment Options</p>
                    <p className="text-lg text-gray-800">Gift Card Balance</p>
                    <p className="text-lg text-gray-800">Contact Us</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl mb-8 font-bold">Company</h1>
                    <p className="text-lg text-gray-800">About Paleswear</p>
                    <p className="text-lg text-gray-800">News</p>
                    <p className="text-lg text-gray-800">Careers</p>
                    <p className="text-lg text-gray-800">Investors</p>
                    <p className="text-lg text-gray-800">Purpose</p>
                    <p className="text-lg text-gray-800">Sustainability</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl mb-8 font-bold">Promotions & Discounts</h1>
                    <p className="text-lg text-gray-800">Student</p>
                    <p className="text-lg text-gray-800">Military</p>
                    <p className="text-lg text-gray-800">Teacher</p>
                    <p className="text-lg text-gray-800">First Responders & Medical Professionals</p>
                    <p className="text-lg text-gray-800">Birthday</p>
                </div>
            </div>

            <div className="flex items-center text-lg text-gray-800 gap-10 mb-32">
                <p>&copy; 2024 Paleswear, Inc. All Rights Reserved</p>
                <p>Team of Sale</p>
                <p>Terms of Use</p>
                <p>Paleswear Privacy Policy</p>
                <p>Your Privacy Choices</p>
                <p>CA Chains Act</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer