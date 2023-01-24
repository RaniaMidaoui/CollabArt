<div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Singup />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} /> 
            <Route path="/reset/:userId/:token" element={<ResetPasswordForm/>} />
        </Routes>
      </BrowserRouter>
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero />
      <Features />
      <Footer />
</div>