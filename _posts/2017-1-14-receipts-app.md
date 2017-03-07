---
layout: project
title: Receipts App for iOS
published: true
description: A concept system app to contactlessly receive and manage receipts in an increasingly wireless, paperless world
cover-image:
cover-color: rgb(255, 255, 255)
cover-height: 25rem
---


<div class="section">
  <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>
  <div class='embed-container'><iframe src="https://player.vimeo.com/video/206012454" width="640" height="359" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>
</div>

<div class="section">
  <div class="section-content flex flex-wrap items-center align-center justify-center">

    <div class="half">
      <div class="center hero-white-iphone">
        <video class="w-100" preload="auto" muted playsinline autoplay loop poster="{{ site.baseurl }}/images/receipts_poster.png">
          <source src="{{ site.baseurl }}/images/receipts_wt.mp4">
        </video>
      </div>
    </div>
    <div class="half text-subsection">

      <img class="v-mid hero-icon tc" src="../images/receipts/receipts-icon.png" />

      <h1 class="dark-gray section-headline"><strong>Receipts</strong> for iOS</h1>

      <p class="dark-gray section-description mb3">Receipts detail our purchases and chronicle our daily journeys. In an increasingly cashless and paperless world, physical receipts are relics.</p>

      <p class="dark-gray section-description">Meet Receipts, a concept iOS system app for contactlessly receiving, securely storing, and finding your digital receipts.</p>
    </div>
  </div>
</div>

<div class="section">

  <div class="image-subsection">
    <figure>
      <img src="../images/receipts/nfc-terminal.png" />
      <figcaption>User holds phone by the terminal to download their receipt.</figcaption>
    </figure>
  </div>

  <div class="text-subsection">
    <h1 class="subsection-headline">Contactless Convenience</h1>
    <p>Receipts is intelligent enough to understand different receipt formats and save them in a standard format packed with rich, useful information. Simply hold your iPhone near an NFC-enabled payment terminal that supports digital receipts when you check out.</p>
  </div>

</div>


<!--
<div class="section">
  <div class="section-content flex flex-wrap items-center align-center justify-center" style="flex-direction: row-reverse;">

    <div class="half">
      <div class="center screen-in-white-iphone divider">
        <img class="w-100" src="../images/receipts/list-view.png" />
      </div>
    </div>

    <div class="half text-subsection">
      <h2 class="subsection-headline">Never lose a receipt.</h2>
      <p class="subsection-description">Receipts are kept organized and ordered chronologically. Colorful icons on the left-hand side tell you the kind of business a receipt is from. Summary costs on the right-hand side cue you on the significance of receipts.</p>
    </div>

  </div>
</div>

<div class="section">
  <div class="section-content flex flex-wrap items-center align-center justify-center">
  <div class="half">
    <div class="center screen-in-white-iphone divider">
      <img class="w-100" src="../images/receipts/map-view.png" />
    </div>
  </div>
    <div class="half text-subsection">
      <h2 class="dark-gray subsection-headline">Search Spatially.</h2>
      <p class="subsection-description">We all forget something from time to time. If you can't remember the name of the store you're trying to return a purchase to, you might remember the general vicinity. All receipts are geotagged and can be viewed in the in-app map.</p>
    </div>
  </div>
</div>

<div class="section">
  <div class="section-content flex flex-wrap items-center align-center justify-center" style="flex-direction: row-reverse;">

  <div class="half">
    <div class="center screen-in-white-iphone divider">
      <video class="w-100" preload="auto" muted playsinline autoplay loop>
        <source src="../images/receipts/wallet.mp4">
      </video>
    </div>
  </div>

  <div class="half text-subsection">
    <h2 class="dark-gray subsection-headline">Where's your last receipt? Probably in your wallet.</h2>
    <p class="subsection-description">For convenient and quick access, your most recent receipts can be found in your Wallet app, much like your paper receipts are in your physical wallet.</p>
  </div>

  </div>
</div>
-->

<div class="section">
  <div class="flex">
    <div class="half text-subsection order-1">
      <h2 class="subsection-headline">Contents</h2>
      <ol>
        <li>Introduction</li>
        <li>Research
          <ul>
            <li><a href="#user-research">User Research</a></li>
            <li><a href="#business-research">Business Research</a></li>
          </ul>
        </li>
        <li>Design
          <ul>
            <li><a href="#defining-the-app">Defining the App</a></li>
            <li><a href="#designing-a-better-receipt">Designing a Better Receipt</a></li>
            <li><a href="#iconography">Iconography</a></li>
            <li><a href="#designing-for-search">Designing for Search</a></li>
            <li><a href="#designing-the-icon">Designing the Icon</a></li>
          </ul>
        </li>
        <li>Conclusion and Reflection</li>
      </ol>
    </div>
    <div class="half text-subsection order-0">
      <h2 class="subsection-headline" id="introduction">Introduction</h2>
      <p>This design project was inspired by my frustration over my disorganized receipts. Many laid in piles or folders. Others hid in my emails or text messages. In an era of smartphones, the balkanized state of receipts seemed overdue for modernization.</p>

      <p>The current trend in technology is toward greater integration between the apps, services, and smart objects we already have. Consumers want products that can work together seamlessly. The Receipts app was conceived as a hypothetical first-party iOS app integrated with other iOS apps and services at the system level.</p>

      <p>The research and design project phases were not monolithic and did not happen in perfect sequence. As the sole (and principal by default) investigator and designer, I weaved between these phases and roles as research yielded new answers and design raised new questions.</p>

      <img class="diagram" src="../images/receipts/diagram-rd-process.png" />

      <p>Any realistic solution must inhabit the complex point-of-sale technology ecosystem, while any worthwhile solution must serve the user’s needs. I understood that I, as the investigator, would need to explore and discover the intermediate problem space where I, as the designer, could build a solution.</p>
    </div>
  </div>
</div>

<div class="section" id="user-research">
  <div class="text-subsection">
    <h2 class="subsection-headline">User Research</h2>

    <p class="summary">Through user interviews, I learned that users have unique organizational methods for dealing with receipts.
    <ul>
      <li>People develop their own unique ways of organizing receipts.</li>
      <li>Consequently, people have their own unique ways of finding receipts.</li>
      <li>People aren't uniformly organized or disorganized.</li>
      <li>People remember few details or features about their receipts.</li>
      <li>Receipts can hold sentimental value when they're associated with a significant memory.</li>
    </ul>
    </p>

    <p class="summary"></p>

    <p class="summary"><a class="expand">Read more...</a></p>

    <div class="collapsible">
      <p>I started by interviewing a dozen individuals. From these interviews, I learned several key insights that I have summarized below.</p>

      <p><strong>People develop their own unique ways of organizing receipts.</strong> Several interviewees reported that they would tape receipts to the original boxes of appliances, electronics, and other significant purchases. Some would file away important receipts and discard unimportant ones. Others did not take a disciplined approach, indiscriminately stashing receipts in kitchen drawers or letting receipts pile up in their wallets or purses.</p>

      <img class="diagram" src="../images/receipts/diagram-organization-methods.png" />

      <p><strong>Consequently, people have their own unique ways of finding receipts.</strong> Interviewees reported difficulty finding receipts when they mix receipt storage strategies. "Did I put the receipt in the kitchen drawer? In the box? In my bag upstairs? I can't remember exactly."</p>

      <p><strong>People aren't uniformly organized or disorganized.</strong> Their best efforts to organize can succumb to shortage of time or energy, resulting in mixed receipt ad hoc storage strategies.</p>

      <p><strong>People remember few details or features about their receipts.</strong> Human memory is fragile, fallible, and suggestible. The more distant a memory, the more muddled it becomes. "Where did I put that receipt for the ladder from Home Depot? Or was it Lowe's?"</p>

      <p><strong>Receipts can hold sentimental value when they're associated with a significant memory.</strong> Several interviewees reported having kept old receipts from a memorable date night or trip. A few reported having shared funny, outrageous, or otherwise interesting receipts on social media.</p>

      <p>My takeaways:
      <ul>
        <li>Because people develop their own unique ways of organizing receipts, the design solution should provide organizational flexibility to users.</li>

        <li>Because people have their own unique ways of finding receipts, the design solution should support multiple and diverse search methods.</li>

        <li>Because people aren't uniformly organized or disorganized, the design solution should make it easy for users to keep a good organizational baseline.</li>

        <li>Because people remember few details or features about their receipts, the design solution should support user search with incomplete information.</li>

        <li>Because receipts can hold sentimental value when they're associated with a significant memory, the design solution should be mindful about what a receipt can signify and be open-minded about what users want to do with their own receipts.</li>
      </ul>
      </p>

      <p>Here I did not conclude user research but continued it throughout the design process as I investigated the potential efficacy of proposed features through interviews and paper prototypes.</p>
    </div>
  </div>
</div>


<div class="section">
  <div class="text-subsection">
    <h2 class="subsection-headline" id="business-research">Business Research</h2>

    <p class="summary">The National Retail Federation, a merchant consortium, sponsors an electronic receipt XML schema.
    <ul>
      <li>The National Retail Federation, a merchant consortium, sponsors an electronic receipt XML schema standard for application-to-application integration, thereby ensuring interoperability between disparate equipment in a point of sale system.</li>
      <li>Though the schema is currently enterprise-facing, it is technically feasible for standardized electronic receipts to be transmitted by near-field communication.</li>
      <li>Electronically receipted return fraud is the fastest growing type of return fraud and is a growing concern for retailers. Mobile operating systems offer robust security and identification capabilities that can be applied toward combating receipt fraud.</li>
    </ul>
    </p>

    <p class="summary"><a class="expand">Read more...</a></p>

    <div class="collapsible">
      <p>Electronic point of sale, or POS, systems originated in the 1970s and have undergone tremendous development and changed since then. Today, they are divided in two categories: traditional and cloud-based.</p>

      <p><strong>Traditional POS systems</strong> comprise of equipment often from different manufacturers: cash drawers, scanners, receipt printers, cashier-facing and customer-facing POS terminal displays, and payment terminals are interoperable because they share manufacturer-neutral APIs. Connected to switch networks, POS systems back up transaction information to store or company servers. Whether or not a traditional POS system supports newer payment methods like NFC is determined by its payment terminal.</p>

      <p><strong>Cloud-based systems</strong> were introduced in the 2000s, following the expansion of web services and the growing availability of affordable mobile devices. Cloud-based systems support all old and most newer payment methods. All systems offer receipts in both old and new formats. Cloud-based systems are connected to web services and receipts are hosted and made accessible online to customers. Companies like Square and Clover market and sell complete POS systems like the one pictured above.</p>

      <p>The National Retail Federation, or NRF, a merchant consortium, established as a division the Association for Retail Technology Standards, or ARTS. The ARTS established in the late 1990s manufacturer-neutral APIs and XML schemas that enable POS peripherals by different manufacturers to work together as a coherent system. IXRetail, established by the ARTS in the early 2000s, provides an XML schema for electronic receipts.</p>

      <p>At the end of 2015, the NRF reported in its <a href="https://nrf.com/sites/default/files/Images/Media%20Center/NRF%20Retail%20Return%20Fraud%20Final_0.pdf" target="blank">2015 Return Fraud Survey</a> that "fraudulent e-receipted returns" had increased by 86% over the last year, representing the top growth area for return fraud. The shortfalls of current electronic receipts are non-exhaustively enumerated in <a href="https://nrf.com/news/the-dark-side-of-e-receipts" target="blank">an NRF publication</a>: they "are easy to transmit, easy to alter, susceptible to cloning and forgery and hard to permanently delete once saved to storage media."</p>

      <p>My takeaways:
      <ul>
        <li>Because nearly all POS equipment manufacturers follow ARTS-established standards for interoperability and data interchange, I reasoned that, after having consulted software engineer peers, it is technically feasible for standardized electronic receipts to be exchanged over NFC in the near future.</li>
        <li>Because of the growing problem of electronic receipt return fraud and the powerful security and identification capabilities offered by the ubiquitous smartphone operating system iOS, there is opportunity to create highly secure standardized electronic receipts that would embraced by merchants.</li>
      </ul>
      </p>
    </div>
  </div>
</div>

<div class="section">
  <div class="flex">
    <div class="image-subsection half order-1">

      <img class="diagram" src="../images/receipts/diagram-flow.png" />
    </div>
    <div class="text-subsection half order-0">
      <h2 class="subsection-headline" id="defining-the-app">Defining the App</h2>

      <p class="summary">Receipts was conceived as a lightweight utility app to help people keep track of their digital receipts. The app <strong>does not</strong> track expenses, calculate budgets, or provide business reviews, all services which should be left to other apps to handle. </p>

      <ul>
        <li>App's core purpose and service is to help people receive and store receipts. Other services like expense or budget tracking can be better provided by other apps.</li>
        <li>App's core purpose tightly circumscribes its architecture.</li>
        <li>Permeable architecture with multiple app entry and exit points.</li>
        <li>Architecture was both elaborated upon and pruned as research and design progressed. The flow chart shown here represents the app architecture in its final iteration.</li>
      </ul>

      <p><a class="expand">Read more...</a></p>

      <div class="collapsible">

        <p>Receipts was conceived as a lightweight utility app to contactlessly exchange and organize receipts.  The app <strong>does not</strong> track spending or calculate budgets, show business reviews, or provide financial advice. These services should be left to other apps to handle. </p>

        <p>The digital receipt is the raison d'être for the app, thus the app must be designed with a tight focus on the receipt. Without functions extraneous to the app's core purpose, the app architecture could be kept shallow with all states separated by no more than three interactions. Each interaction pushes the user toward the receipt they seek.</p>

        <p>The app architecture was made highly permeable with multiple entry points to different depth levels within the app and multiple exits.</p>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div class="image-subsection">
    <figure>
      <img class src="../images/receipts/early-iteration.png" />
    </figure>
  </div>
  <div class="text-subsection">
    <h2 class="subsection-headline">Early Iteration</h2>

  </div>
</div>

<div class="section">
  <div class="image-subsection">
    <figure>
      <img class="image" src="../images/receipts/receipt-iterations.png" />
      <figcaption>Three receipt design iterations.</figcaption>
    </figure>
  </div>

  <div class="flex">

    <div class="half image-subsection order-1">
      <img class="diagram" src="../images/receipts/screen_diagram_receipt.png" />
    </div>

    <div class="half text-subsection order-0">
      <h2 class="subsection-headline" id="designing-a-better-receipt">Designing a Better Receipt</h2>

      <p class="summary">After several iterations with continuous user feedback, I created a visually-distinctive digital receipt. <a class="expand">Read more...</a></p>

      <div class="collapsible">
        <p>The digital receipt is the keystone piece of the project. It is the primary determinant of the project's attraction and success.</p>

        <p>Looking through hundreds of paper receipts, some my own and others donated by friends, I first saw few unifying elements. Some receipts listed store contact details at the beginning; others listed them at the end. Some stated had return policies; others did not. One had a lengthy store return charter that added ten inches to the receipt length. Another listed each item name in both English and Mandarin Chinese.</p>

        <p>The seemingly infinite variability of receipt semantics and syntaxes made the mission of designing a one-size-fits-all digital receipt appear impossible. Naturally, a difficult problem would take a few iterative attempts.</p>

        <img class="diagram" src="../images/receipts/diagram-receipt-process.png" />

        <h3 class="subsection-subtitle">First Iteration Design</h3>
        <p>For the <strong>first iteration</strong> (pictured above on the left) of the receipt design, I thought that a receipt should appear on screen as it does on paper in order to capture all information, details, and nuances. Common receipt paper roll widths (2.25 and 3.125 inches) closely match iOS device screen widths (iPhone 6-7: 2.30 inches; iPhone 6-7 Plus: 2.6 inches) so a receipt <i>would</i> appear on screen closely as it does on paper.</p>

        <h3 class="subsection-subtitle">First Iteration Feedback</h3>
        <p>Initial user feedback revealed that my presupposition about total information capture was wrong. Information about the cashier's name or the checkout line number, as examples, were unimportant to users. Furthermore, such extraneous information reduced receipt readability, clarity, and flow.</p>

        <p>I realized that the few unifying elements were shared by all receipts precisely because they were important, while other elements weren't shared precisely because they were unimportant to the core purpose of a receipt. From this insight I concluded that the common and thus important elements needed to be more <strong>salient</strong>.</p>

        <p>I identified four important elements shared by all receipts:
        <ul>
          <li>Business information: name, contact, location</li>
          <li>Item information: item names, details, prices</li>
          <li>Transaction information: payment method, transaction date</li>
          <li>Miscellaneous information: return policy, customer surveys, warranty guarantees</li>
        </ul>
        </p>

        <h3 class="subsection-subtitle">Second Iteration Design</h3>

        <p>For the <strong>second iteration</strong> (pictured above in the middle), I organized identified critical elements in a hierarchal structure that lent predictability to the new receipt design. People first search through receipts not by phone number or address but by business names and transaction dates, so I pared the receipt header down to those search-guiding details.</p>

        <p>I chose to exclude business logos in this iteration because I couldn't find a way to present them in a consistent and high-quality manner. Some businesses had large and detailed logos that would significantly degrade into when shrunk. Conversely, others had logos that would degrade when enlarged.</p>

        <p>The business location and contact details were relocated beneath the list of item names and prices, the core of the receipt. An embedded map supplements the business location details, providing highly salient geospatial information to the user.</p>

        <img class="diagram" src="../images/receipts/diagram-salient-spatial-info.png" />

        <p>I allocated sections further below the receipt for payment transaction details and miscellaneous information like return policies or customer survey links. All sections were cleanly formatted and presented in an aesthetically-pleasing but neutral style.</p>

        <h3 class="subsection-subtitle">Second Iteration Feedback</h3>

        <p>User feedback was decidedly more positive. Test users found the second iteration design more readable, clear, and attractive but still "plain" in appearance and lacking in interactivity.</p>

        <p>Reflecting but not yet acting on user feedback, I concurred that there was potential for interactivity. There are user scenarios—where the user dials the listed phone number, emails the listed email address, or looks up directions to the listed store address—that could benefit from improved flow through smart interactions.</p>

        <img class="diagram" src="../images/receipts/diagram-call-interaction.png" />

        <p>Processing user feedback on visual appeal, which can often be fickle and vague, was more difficult. Upon deeper reflection, I developed a more useful interpretation of feedback about the "plain" second iteration receipts: they were visually indistinctive and unmemorable.</p>

        <p>I realized that by having imposed a predictable structure I had in effect reduced the structural distinctiveness of an already stylistically indistinct design. Since visual appearance is composed of structure and style, <i>a structurally and stylistically indistinct design <strong>is</strong> a visually indistinct design</i>.</p>

        <img class="diagram" src="../images/receipts/diagram-structure-style.png" />

        <p>The implications of visually indistinct receipts for usability are not immaterial. It is well-established that people can better identify visually distinct objects. Consequently, increasing the visual distinctiveness of receipts will make them easier for users to find and identify.</p>

        <h3 class="subsection-subtitle">Third Iteration Design</h3>
        <p>For the <strong>third design iteration</strong>, I made business contact details actionable through the addition of iconic buttons that allow users to initiate a phone call or an email message seamlessly from within the app. Normally, a user would copy contact details from a receipt and enter them into their phone or email apps.</p>

        <img class="diagram" src="../images/receipts/diagram-improved-call-interaction.png" />

        <p>To increase the visual distinctiveness and thus distinguishability of receipts, I graphically emphasized what first and foremost has set them apart: the businesses the receipts are from. I imported Apple Maps place marker iconography and colors to color-code receipt headers by the type of businesses they're from with vibrant hues.</p>

        <p>I made other visual tweaks. Line-spacing was slightly tightened to compact the receipt while maintaining readability. The background panel behind the business information section was made a translucent diaphanous acrylic sheet that reveals yet obscures the map behind, suggesting a connection while maintaining separation.</p>

        <img class="diagram" src="../images/receipts/diagram-map-panel.png" />

        <h3 class="subsection-subtitle">Third Iteration Feedback</h3>
        <p>This time, user feedback was overwhelmingly positive. Test users found the receipts highly readable and attractive yet distinct and distinguishable. Test users could very quickly infer the contents of the receipt by a cursory glance at the receipt header. Though the receipts shown to test users were non-interactive prototypes, users gave feedback that they would appreciate the ability to quickly contact or locate businesses from within the receipts.</p>
      </div>
    </div>

  </div>

  <div class="image-subsection">
    <figure>
      <img src="../images/receipts/receipts-all.png" />
      <figcaption>Example receipts in digital format.</figcaption>
    </figure>
  </div>
</div>

<div class="section">
  <div class="image-subsection">
    <figure>
      <img src="../images/receipts/category-icons.png" />
      <figcaption>Apple Maps place icons.</figcaption>
    </figure>
  </div>

  <div class="text-subsection">
    <h2 class="subsection-headline" id="iconography">Iconography</h2>

    <p class="summary">The Receipts app leverages and in turn reinforces existing user familiarity of the Apple Maps place iconography and colors to help users identify receipts. <a class="expand">Read more...</a></p>

    <div class="collapsible">
      <p>Everyday, millions of people use Apple Maps to get directions and find destinations. It's the most popular map app on iOS, <a href="http://fortune.com/2015/06/16/apple-google-maps-ios/" target="blank">having far surpassed Google Maps in 2015</a>.</p>

      <p>Apple Maps has its own bold and colorful language of place markers that identify types of businesses and attractions. I reasoned that, given Apple Maps' popularity, many iOS users have developed a basic familiarity of Apple Maps iconography: such basic familiarity is a user mental model resource.</p>

      <p>Thinking ecologically, I recognized there's potential for a symbiotic relationship between Receipts and Maps. Receipts could leverage user familiarity with Maps iconography and, in turn, build on it. Over time, the symbiosis will strengthen users' mental associations between place types, place pictograms, and place colors.</p>

      <img class="diagram" src="../images/receipts/diagram-symbiosis-maps-receipts.png" />

      <p>A place icon can graphically imbue a digital receipt with a sense of where it's from. Users can search receipts not only by business name and location but also by place icon and color. As users' mental models strengthen through repeated use of Receipts and Maps, users will identify place icons and colors more quickly and reliably in both apps, thereby becoming becoming more effective at using the apps.</p>
    </div>
  </div>
</div>

<div class="section">
  <div class="image-subsection">
    <figure>
      <img class="image" src="../images/receipts/list-iterations.png" />
      <figcaption>Several of the many iterations for the list view design.</figcaption>
    </figure>
  </div>

  <div class="text-subsection">
    <h2 class="subsection-headline" id="designing-for-search">Designing for Search</h2>

    <p class="summary">User research revealed that people remember only the most salient parts from receipts. <a class="expand">Read more...</a></p>

    <div class="collapsible">
      <p>Receipts are often some of the least important things in our lives. As mundane by-products of our daily lives, receipts are rarely remembered or thought about. The small details of receipts—the business address or the checkout line number may escape us, but stories around their purchase don't quite so easily.</p>

      <p>And stories are about context. Users interviews reveal that people often remember the circumstances surrounding their purchases. Furthermore, memories about purchases are often entangled with other memories, like those of hiking trips, dinner preparations, and office parties.</p>

      <img class="diagram" src="../images/receipts/diagram-incomplete-information.png" />

      <p>For this phase of the project, I set out to design not obligatory screen views but tools to support users in searching for and organizing their receipts. From interviews, the most salient receipt details recalled by people came in three flavors: objective (what was bought?), temporal and chronological (when was it bought?), and spatial (where was it bought?).</p>

      <img class="diagram" src="../images/receipts/diagram-two-views.png" />

      <img class="diagram" src="../images/receipts/diagram-two-views.gif" />

      <p>I designed an interface with two modal views that support chronological and spatial search. Floating above those two views is a modeless panel that supports objective search and filter controls. The two modal views access and output the same information set that is controlled and filtered through the modeless panel.</p>

      <img class="diagram" src="../images/receipts/diagram-chronological-views.png" />

      <p>In the chronological search view, receipts are displayed as list items in a manner similar to their receipt headers. As mentioned before, the format was designed to help users quickly identify a desired receipt.</p>

      <p>Unlike the receipt headers, the list items show summary transaction costs, giving the user a clue about whether or not a receipt is associated with a big ticket purchase. </p>

      <img class="diagram" src="../images/receipts/diagram-map-expanded-location.png" />

      <p>In the spatial search view, receipts are displayed as red dots that contrast highly with the map background. Depending on the map zoom level, adjacent red receipt dots will merge as larger circles with item counts.</p>
    </div>
  </div>
</div>

<div class="section">

  <div class="text-subsection">
    <h2 class="subsection-headline" id="designing-the-icon">Designing the Icon</h2>

    <p>An iOS app icon is a super-elliptical square, or “squircle”. A receipt is a long and narrow rectangle. The representation of a full receipt within the app icon results in an unevenly balanced composition:</p>

    <img class="diagram" src="../images/receipts/diagram-app-icon-length.png" />

    <p>I first attempted to balance the composition by truncating the receipt length. However, truncation impacted how the rectangle would be "read" as a receipt instead of as some other paper object.</p>

    <img class="diagram" src="../images/receipts/diagram-receipt-length-comparison.png" />

    <p>I had to find another way to adjust proportions of the object to match those of the app icon while keeping it representational of a receipt. My solution was to fold the receipt object. The solution <strong>reduced the object's vertical profile without truncating the object.</strong></p>

    <img class="diagram" src="../images/receipts/diagram-app-icon-folding.png" />

    <p>The perspective was skewed slightly leftward so that the viewer can see the object's folded edges and thinness. The object was not neatly folded and pressed so much as it was softly furled, resulting in edge curves that confer the <strong>illusion of a paper-like materiality</strong> upon an immaterial digital object.</p>

    <p>To reinforce the idea of the digital paper object as a receipt, I added abstracted line items and made the top and bottom edges serrated. The serrated edges are a gesture toward the old receipt printers that would require a cashier to manually tear a newly printed receipt against metal teeth, leaving the receipt paper with characteristically serrated edges. I chose to leave the total price line readable and concrete because it succinctly <strong>summarizes the transaction-summarizing purpose of a receipt.</strong></p>

    <img class="diagram" src="../images/receipts/diagram-app-icon-details.png" />

    <p>I decided that the app icon should depict not only a receipt but the digital receipt that is at the core of the app. The most visually striking feature of the digital receipt is its colorful header. Since the receipt header color is not defined by a single color but by a wide spectrum representing the types of places the user can get receipts from, I chose a vibrantly rainbow-hued band for the icon's representational receipt to <strong>symbolize the versatile and multifaceted nature of the app's digital receipt.</strong></p>

    <img class="diagram" src="../images/receipts/diagram-app-icon-color.png" />

    <p>For the final design, I applied soft shadows and gradients to enhance the materiality of the receipt. I chose a deep blue-cyan gradient as the background because it stood well against the colorful header and crisp white paper of the receipt.</p>

    <img class="diagram" src="../images/receipts/diagram-final-icons.png" />

  </div>

  <div class="text-subsection">
    <h2 class="subsection-subheadline" id="conclusion-and-reflections">Conclusion and Reflections</h2>

    <p>First, I thank you, dear reader, for taking the time to read my project which I worked hard on for over a month.</p>

    <p>The majority of the time I spent on the project was spent on research and debate. Whenever I discovered new insights, I debated their validity and applicability with both myself and my friends in design and software engineering. Similarly, I offered up my design decisions for critique. Had I chosen not to have my work challenged, the project could have been completed in less than week but would have suffered from insufficient criticism.</p>

    <p>The Receipts app was imagined and conceived as a first-party iOS system app, but there are no plans to implement it. It was a productive design exercise. I hope to someday to be in a position where I can work on a product that's part of a complex product and user ecosystem.</p>

    <p>I worked alone on the project, so there was only so much I could do. Had I more time and resources, I would have pushed the design further along certain dimensions:</p>

    <ul>
      <li>Though I did limited testing of certain features or designs, like asking users to search for a specific receipt in a pile of samples, full application usability testing was outside my reach because it would entail building and deploying a fully functional app. I would like to see how users put the app to work in managing real, not sample, receipts.</li>
      <li>I did not deeply investigate the app's usability for elderly or handicapped users. I cannot say for sure whether or not the app's interactions can be easily carried out by a user with motor impairments. This is an area I would like to investigate further.</li>
      <li>I imagined NFC receipts as the ubiquitous method for receiving receipts in the future. Until that future arrives, what do users do in the meanwhile? I imagine the user using their camera to scan a QR code or capture a print receipt, or using the app to scan their email inbox for electronic receipts. Though I had given considerable thought to these edge cases, I would have liked to explored them in the design.</li>
    </ul>

  </div>
</div>
