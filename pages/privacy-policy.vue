<template>
  <div id="page" class="page">
    <section class="page-content">
      <h1>Privacy Policy</h1>
      <p>This Privacy Policy explains what information <a href="https://alistairshepherd.uk">alistairshepherd.uk</a> collects about its users, and what I do with that information. This policy applies only to analytics obtained through your use of alistairshepherd.uk, alistairshepherd.uk or alistairshepherd.com (hereafter referred to only by alistairshepherd.uk).</p>
      <h3>Website Visitors</h3>
      <p>Like most website operators, alistairshepherd.uk collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. My purpose in collecting non-personally identifying information is to better understand how visitors use my website.</p>
      <p>alistairshepherd.uk also collects potentially personally-identifying information like Internet Protocol (IP) addresses. I do not use such information to identify our visitors, however, and this information is anonymised before being presented to administrators, and will never be disclosed to persons outside of those who work on alistairshepherd.uk.</p>
      <h3>Opt-out of tracking</h3>
      <p>I would really appreciate if users let me collect information about their visit to alistairshepherd.uk as it allows me to improve my website and services based upon user interaction. If you do not wish to be tracked however, you can opt out of tracking using our <a href="#consent">Consent Dialog</a>. This stores an anonymised non-expiring cookie in your browser that is used to identify devices that should not be tracked.</p>
      <p><a href="#consent">Open Consent Dialog</a></p>
      <h3>Gathering of Personally-Identifying Information</h3>
      <p>Certain aspects of alistairshepherd.uk have facilities to collect personal information for a specific purpose. For example, in the contact form. This information is only stored for the purpose responding to contact forms, and will only ever be disclosed to Alistair Shepherd without further consent. Visitors are also of course able to refuse to supply this information by not using the contact form and contacting me through other means.</p>
      <h3>Protection of Information</h3>
      <p>Information collected from visitors to alistairshepherd.uk is collected, processed and stored by my website development brand, Accudio. This information will not be sent elsewhere and will only be accessible to those working on alistairshepherd.uk.</p>
      <h3>Aggregated Statistics</h3>
      <p>alistairshepherd.uk may collect statistics about the behaviour of visitors to my website. For instance, I may reveal how many visits a particularly page got, a breakdown of the type of device used to access alistairshepherd.uk, or anonymised geographical information in the form of country or region, for example, United Kingdom, Highland.</p>
      <h3>Cookies</h3>
      <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. alistairshepherd.uk avoids using cookies, except in regards to the tracking opt-out above. This cookie does not store any identifying information about visitors, and simply informs the analytics system if a visitors does not wish to be tracked. If you would like to opt-out of tracking without accepting this cookie however, you can use the 'Do Not Track' feature of your browser.</p>
      <h3>Third Parties</h3>
      <p>Certain functionality of alistairshepherd.uk uses third party services. No data is shared between alistairshepherd.uk and these third parties directly, however in your use of carrbridge.com they may collect data on your interactions and/or set cookies on your computer. alistairshepherd.uk is not responsible for the data collected by third parties, as listed below:</p>
      <ul>
        <li>alistairshepherd.uk is hosted with the CDN Netlify and uses Netlify Forms for contact form submissions. Netlify may perform server-side tracking of your visit in order to improve their services in accordance with their <a href="https://www.netlify.com/privacy/">Privacy Policy</a>.</li>
      </ul>
      <h3>Contact</h3>
      <p>If you would like to get in touch with me about this privacy policy, analytics or otherwise, please see below.</p>
      <p>Email: <a href="mailto:alistair@accudio.com">alistair@accudio.com</a></p>
      <p>Contact form: <nuxt-link to="/contact">alistairshepherd.uk/contact</nuxt-link></p>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$bus.$emit('page-mount', 1)
  }
}
</script>

<style lang="scss" scoped>
iframe {
  border: 0;
  width: 100%;
}

ul {
  margin-bottom: 1.5rem;
}
</style>
