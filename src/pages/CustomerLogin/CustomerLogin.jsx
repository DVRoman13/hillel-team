import Header from '../../components/common/Header/components/TopHeader'
import Footer from '../../components/common/Footer/Footer'
import classes from './CustomerLogin.module.scss'
const CustomerLogin = () => {
  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.conteiner}>
          <div className={classes.customerLogin}>
            <div className={classes.customerLogin__nav}>
              <a href='#' className={classes.customerLogin__nav__link}>
                Home
              </a>
              <span className={classes.customerLogin__nav__link__where}>
                {'›'}
              </span>
              <a href='#' className={classes.customerLogin__nav__link}>
                Login
              </a>
            </div>
            <div className={classes.customerLogin__nav__title}>
              <h3>Customer Login</h3>
            </div>
            <div className={classes.display__customers}>
              <div className={classes.customers}>
                <div className={classes.customers__about}>
                  <span className={classes.customers__about__title}>
                    Registered Customers
                  </span>
                  <span className={classes.customers__about__subtitle}>
                    If you have an account, sign in with your email address.
                  </span>
                </div>
              </div>
              <div className={classes.customers}>
                <div className={classes.customers__about}>
                  <span className={classes.customers__about__title}>
                    New Customer?
                  </span>
                  <span className={classes.customers__about__subtitle}>
                    Creating an account has many benefits:
                  </span>
                  <ul className={classes.customers__about__subtitle__listener}>
                    <li>Check out faster</li>
                    <li>Keep more than one address</li>
                    <li>Track orders and more</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CustomerLogin
