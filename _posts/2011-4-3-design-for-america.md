---
layout: project
title: Design For America
description: Advocating human-centered design
published: true
---


<div class="section">
  <div class="section-content">

    <div class="subsection mb3">
      <img class="" src="../images/dfa/dfa-pano.png" />
    </div>

    <div class="subsection w-50 mv3">
      <p>Design For America is a national network of university campus studios that advocate human-centered design among students and use design innovation for good within their communities. Learn more about what the organization through <a class="external link hover-red" href="http://designforamerica.com/what-we-do/" target="\_blank">the DFA website</a>.</p>
      <p>(Thanks for the great memories, guys!)</p>
    </div>

    <div class="subsection mv3">
      <img src="../images/dfa/dfa-group.jpg" />
    </div>

    <div class="subsection mv3">
      <img src="../images/dfa/dfa-board-2.png" />
    </div>

    <div class="subsection w-50 mv3">
      <p>National and regional conferences and meet-ups brought people across many backgrounds and disciplines together to learn, share, and build action networks.</p>
    </div>

    <div class="subsection mv3">
      <img src="../images/dfa/dfa-team.jpg" />
    </div>

    <div class="subsection mv3">
      <img src="../images/dfa/dfa-board-1.png" />
    </div>

    <div class="subsection w-50 mv3">
      <p>For its 2013 leadership studio, Design For America partnered up with experts from the <a href="http://www.cnt.org" target="\_blank">Center for Neighborhood Technology</a> (CNT) and the Federal Emergency Management Agency (FEMA) for a weeklong design workshop to create concepts for addressing urban disasters, namely flooding.</p>
      <p>A dozen residents of Midlothian, Illinois, volunteered as our community partners and gracefully invited us into their homes to hear their stories. Getting to understand them and their stories, ignored by the municipal government, was an exercise in user interviewing as well as compassion and empathy.</p>
      <p>For our community partners, urban flooding is a serious, life-changing problem. It causes pervasive structural mold growth that endangers inhabitant respiratory health and can't easily be cleaned up with bleach. It destroys furniture and other possessions. It destroys home values and strands lower-income homeowners in virtually unsellable houses.</p>
      <p>Throughout the workshop and design process, we continually received feedback and critique from our community and expert partners. My team capitalized on the finding that the Midlothian residents often had flood-fighting plans but were often caught off-guard by the unpredictable nature of flooding. We came up with a design for a smart sensor system that, when triggered, can alert homeowners</p>
    </div>

    <div class="subsection mv3">
      <img src="../images/dfa/dfa-birdseye.jpg" />
    </div>

    <div class="subsection mv3">
      <img src="../images/dfa/dfa-board-3.png" />
    </div>
  </div>
</div>

<script src="{{ site.baseurl }}/scripts/isotope.pkgd.min.js"></script>
<script src="{{ site.baseurl }}/scripts/imagesloaded.pkgd.min.js"></script>
<script>
  // external js: isotope.pkgd.js

  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.w-third'
    }
  });

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
</script>
