---
layout: project
title: Receipts App Design
published: true
description: A lengthy and laborious research and design process
cover-image:
cover-color: rgb(255, 255, 255)
cover-height: 25rem
---


<link rel="stylesheet" href="https://www.apple.com/wss/fonts?family=Myriad+Set+Pro&v=2" type="text/css" media="all">

<div class="section">
  <div class="section-content flex flex-column items-center">

    <div class="subsection flex-auto" style="max-width: 700px;">
      <h2 class="subsection-headline" id="introduction">Introduction</h2>
      <p>The design project was inspired by my frustration over my disorganized receipts. Many laid in piles or folders. Others hid in my emails or text messages. In an era of smartphones, the balkanized state of receipts seemed overdue for modernization.</p>

      <p>The research and design project phases were not monolithic and did not happen in perfect sequence. I weaved between them as research yielded new answers and design raised new questions.</p>

      <img class="diagram" src="../images/receipts/diagram-rd-process.png" />

      <p>Any realistic solution must inhabit the complex point-of-sale technology ecosystem, while any worthwhile solution must serve the user’s needs. I was designing an app not so much for receipts as for customers and businesses at the end of the day. Understanding that any solution would not stand alone in the context of customers’ lives or business activities, I chose to approach my research through an ecological perspective.</p>
    </div>

    <img class="image" src="../images/receipts/early-research.jpg" />

    <div class="subsection flex-auto" style="max-width: 700px;">
      <h2 class="subsection-headline" id="early-research">Early Research</h2>

      <p>My experiences and anecdotes served as user research data point #0. I was aware of the risks of leaning on one's own experiences as data and the danger it'd beget in narrowing my design search.</p>
    </div>

    <div class="subsection flex-auto" style="max-width: 700px;">
      <h2 class="subsection-headline" id="user-research">User Research</h2>

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

    <img class="image" src="https://a.fastcompany.net/multisite_files/fastcompany/imagecache/1280/poster/2013/12/3022182-poster-cafe-overhead.png" />

    <div class="subsection flex-auto" style="max-width: 700px;">
      <h2 class="subsection-headline" id="business-research">Business Research</h2>
      <p>Electronic point of sale, or POS, systems originated in the 1970s and have undergone tremendous development and changed since then. Today, they are divided in two categories: traditional and cloud-based.</p>

      <p><strong>Traditional POS systems</strong> comprise of equipment often from different manufacturers: cash drawers, scanners, receipt printers, cashier-facing and customer-facing POS terminal displays, and payment terminals are interoperable because they share manufacturer-neutral APIs. Connected to switch networks, POS systems back up transaction information to store or company servers. Whether or not a traditional POS system supports newer payment methods like NFC is determined by its payment terminal.</p>

      <p><strong>Cloud-based systems</strong> were introduced in the 2000s, following the expansion of web services and the growing availability of affordable mobile devices. Cloud-based systems support all old and most newer payment methods. All systems offer receipts in both old and new formats. Cloud-based systems are connected to web services and receipts are hosted and made accessible online to customers. Companies like Square and Clover market and sell complete POS systems like the one pictured above.</p>

      <p>The National Retail Federation, or NRF, a merchant consortium, established as a division the Association for Retail Technology Standards, or ARTS. The ARTS established in the late 1990s manufacturer-neutral APIs and XML schemas that enable POS peripherals by different manufacturers to work together as a coherent system. IXRetail, established by the ARTS in the early 2000s, provides an XML schema for electronic receipts.</p>

      <p>At the end of 2015, the NRF reported in its <a href="https://nrf.com/sites/default/files/Images/Media%20Center/NRF%20Retail%20Return%20Fraud%20Final_0.pdf" target="blank">2015 Return Fraud Survey</a> that "fraudulent e-receipted returns" had increased by 86% over the last year, representing the top growth area for return fraud. The shortfalls of current electronic receipts are non-exhaustively enumerated in <a href="https://nrf.com/news/the-dark-side-of-e-receipts" target="blank">an NRF publication</a>: they "are easy to transmit, easy to alter, susceptible to cloning and forgery and hard to permanently delete once saved to storage media."</p>

      <p>My takeaways:
      <ul>
        <li>Because nearly all POS equipment manufacturers follow ARTS-established standards for interoperability and data interchange, I reasoned that, after having consulted software engineer peers, it is technically feasible for standardized electronic receipts to be exchanged over NFC in the near future.</li>
        <li>Because of the growing problem of electronic receipt return fraud and the powerful security and identification capabilities offered by the  ubiquitous smartphone operating system iOS, there is opportunity to create highly secure standardized electronic receipts that would embraced by merchants.</li>
      </ul>
      </p>

    </div>

    <img class="image" src="../images/receipts/receipt-iterations.png" />

    <div class="subsection flex-auto" style="max-width: 700px;">
      <h2 class="subsection-headline" id="designing-better-receipt">Designing Better Receipts</h2>
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

    <img class="image" src="../images/receipts/category-icons.png" />

    <div class="subsection flex-auto" style="width: 100%; max-width: 700px;">
      <h2 class="subsection-headline">Oh, The Places You'll Go</h2>
      <p>Everyday, millions of people use Apple Maps to get directions and find destinations. It's the most popular map app on iOS, <a href="http://fortune.com/2015/06/16/apple-google-maps-ios/" target="blank">having far surpassed Google Maps in 2015</a>.</p>

      <p>Apple Maps has its own bold and colorful language of place markers that identify types of businesses and attractions. I reasoned that, given Apple Maps' popularity, many iOS users have developed a basic familiarity of Apple Maps iconography: such basic familiarity is a user mental model resource.</p>

      <p>Thinking ecologically, I recognized there's potential for a symbiotic relationship between Receipts and Maps. Receipts could leverage user familiarity with Maps iconography and, in turn, build on it. Over time, the symbiosis will strengthen users' mental associations between place types, place pictograms, and place colors.</p>

      <img class="diagram" src="../images/receipts/diagram-symbiosis-maps-receipts.png" />

      <p>A place icon can graphically imbue a digital receipt with a sense of where it's from. Users can search receipts not only by business name and location but also by place icon and color. As users' mental models strengthen through repeated use of Receipts and Maps, users will identify place icons and colors more quickly and reliably in both apps, thereby becoming becoming more effective at using the apps.</p>

    </div>

    <img class="image" src="../images/receipts/receipts-all.png" />

    <div class="subsection flex-auto" style="max-width: 700px;">
      <p>An array of beautiful receipts.</p>
    </div>

    <img class="image" src="../images/receipts/list-iterations.png" />

    <div class="subsection flex-auto" style="max-width: 700px;">
      <h2 class="subsection-subheadline" id="designing-for-search">Designing for Search</h2>

      <p>Receipts are often some of the least important things in our lives. As mundane by-products of our daily lives, receipts are rarely remembered or thought about. The small details of receipts—the business address or the checkout line number—may escape us, but stories around their purchase don't quite so easily.</p>

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


    <div class="subsection flex-auto" style="max-width: 700px;">
      <h2 class="subsection-subheadline" id="designing-the-icon">Designing the Icon</h2>

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

    <div class="subsection flex-auto" style="max-width: 700px;">
      <h2 class="subsection-subheadline" id="conclusion-and-reflections">Conclusion and Reflections</h2>

      <p>First, I thank you, dear reader, for taking the time to read my project which I worked hard on for over a month.</p>

      <p>The majority of the time I spent on the project was spent on research and debate. Whenever I discovered new insights, I debated their validity and applicability with both myself and my friends in design and software engineering. Similarly, I offered up my design decisions for critique. Had I chosen not to have my work challenged, the project could have been completed in less than week but would have suffered from insufficient criticism.</p>

      <p>The Receipts app was imagined and conceived as a first-party iOS system app, but there are no plans to implement it. It was a productive design exercise. I hope to someday to be in a position where I can work on a product that's part of a complex product and user ecosystem.</p>

    </div>

  </div>
</div>
