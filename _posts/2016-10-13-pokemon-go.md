---
layout: project
title: Pokemon Go
published: true
description: How can we bring players back into the fold and increase replayability?
cover-height: 23em;
cover-color: rgb(254, 213, 48)
---
<section class="bg-white">
  <div class="container">
    <h1 id="l1-pre-research">History <span class="fw1">歴史</span></h1>
    <div class="cf">
      <h3 class="article-header" id="l2-history-of-the-game">History of the Game</h3>
      <article class="half">
        <p>Originally conceived in 1995 by Satoshi Tajiri, the Pokemon media franchise empire today encompasses anime (Japanese-style animation) for film and television, manga (Japanese-style comics), trading cards, and video games—the franchise’s crown jewels. The franchise’s first generation video game launched in Japan as Pocket Monsters: Red and Green in 1996, later that year followed by Pocket Monsters: Blue. Two years later, in 1998, the game was introduced to North American audiences in a somewhat abbreviated form, Pokémon: Red and Blue, and touched off the original Pokemon “craze” as described by IGN cofounder Craig Harris in a 1999 game review. The rise of Pokémon coincided with the childhoods of millennials, many of whom remember—fondly—of game cartridges strewn across beds, fumbling for cables to link up GameBoys, and trading Pokémon with other children on shaky morning bus rides.</p>

        <p>In 2012, Niantic Labs, then an internal startup within Google, launched Ingress, a location-based, augmented-reality (AR), massively multiplayer online mobile game where players are organized into two opposing factions vying for virtual control over physical landmarks. The game achieved moderate albeit niche success, particularly among technologically-savvy, urban American men. Nonetheless, Ingress cultivated a strong player community and produced the solid location-based, AR game formula on which the fundamental gameplay mechanics of Pokemon Go were based.</p>

        <p>Niantic, Inc., spun off from Google in 2015, launched Pokemon Go, after several months of closed beta, on July 6th, 2016. The game received immediate global attention and achieved near-linear growth well into mid-July. Each passing day saw the game’s active player base grow by millions with no end seemingly within sight. Soon Niantic found itself in the coveted but volatile situation of being a victim of one’s own success: player growth exceeded their wildest dreams—and preparations. The collective weight of 40-million-some active players proved to be a burden too heavy to shoulder by the game servers. As consequence of the game servers being overtaxed, the game experience suffered: excruciatingly long login times and game unresponsiveness prompted player outcry. Niantic, already engaged in a mad-dash effort to expand game server capacity, sought to lighten game server loads by disabling server processing-intensive features.</p>

        <p>By the end of July, the very month during which the game launched, the game’s maturity became apparent as its active player base had tapered off since its peak in mid-July. Through August and September, the active player base continued to wither, albeit not as rapidly as it had grown, but nonetheless withered as hundreds of thousands of players became inactive each day.</p>

        <p>Not long ago, players would swarm Central Park in New York City or halfway across the world in Beitou in Taipei City for a rare Pokemon. What happened? Why has the game so abruptly lost its luster? Is this the game’s inevitable natural end of life? Or did the removal of a few certain features adversely affect the game experience? My upcoming project seeks to investigate the forces driving the game’s decline and then propose remedial design changes.</p>
      </article>
      <article class="half">
        <span class="pull yellow">Pokemon Go was based on Niantic's previous location-based game Ingress</span>
      </article>
    </div>
  </div>
</section>

<section class="bg-washed-green">
  <div class="container">
    <h1 id="l1-history">Gameplay <span class="fw1">ゲームプレイ</span></h1>
    <div class="cf">
      <h3 class="f4 f2-ns fw6 mb2 pt3">Pokestops</h3>
      <article class="half">
        <p>Pokemon Go is a mobile location-based, augmented-reality massively multiplayer online game. While augmented reality is merely accessory to gameplay, location basis is at the core. The game world is mapped onto the real world. Points of interests and landmarks, both crowdsourced by Ingress players and gathered from map services, serve as the locations for Pokéstops and Gyms. </p>
        <p>Pokéstops are common features in the virtual game landscape that are often located at minor points of interest like neighborhood parks. They serve as repositories from which players can intervally acquire free items and as receptacles in which players can place Lures, purchasable items that attract Pokémon for a short time period.</p>

      </article>
      <figure class="half">
        <img src="http://cdn.gamerant.com/wp-content/uploads/walking_around_pokemon_go.jpg" />
        <figcaption class="f6 fw2 mid-gray mt2">Figure 1: From left to right. A Pokéstop with items available, a Pokéstop without items, and a Pokéstop with a Lure placed. </figcaption>
      </figure>
    </div>
    <div class="cf">
      <h3 class="f4 f2-ns fw6 mb2 pt3">Gyms</h3>
      <article class="half">
        <p>Gyms are comparatively rarer and more often located at notable landmarks than mere points of interest. If a Gym is empty, a player can capture it for their faction by installing an owned Pokémon to guard it. A player’s interaction with an occupied Gym is determined by whether the gym is occupied by the player’s own faction or not. If the Gym is occupied by the player’s own faction, the player can battle it to increase its prestige point count: the number of defending Pokémon a Gym can support is determined by its prestige, capping at 10 Pokémon. Inversely, a player can battle a Gym occupied by a hostile faction to decrease its point count. When a Gym is depleted of prestige points, it is vacated and thus made capturable.</p>

        <p>The way Pokémon Go battles are fought is fundamentally different than the way they are in the classic Pokémon video games. Whereas classic Pokémon battles are turn-based and require the player to carefully deliberate between different actions and moves, Pokémon Go battles are real-time and require the player to rapidly tap their phone screen to execute repetitive attacks.</p>

        <p>Gyms serve as the hubs of the Pokémon Go game world. Since players neither can battle nor directly interact with one another, they are limited to indirect interactions at Gyms mediated through their battling Pokémon. Furthermore, player avatars are only visible as occupiers of Gym but are not seen roaming in the game world. Given their virtual monopoly over the visibility of players’ virtual presences, Gyms are the game’s virtual crossroads.</p>
      </article>
      <figure class="half">
        <img src="http://i1.2pcdn.com/node14/image/article/201607/08/20160708060632a0egcp9aghxkdb6m.jpg" />
        <figcaption>Figure 2: From left to right. Gym in world map view. View of defending Pokemon. Gym battle view.</figcaption>
      </figure>
    </div>
    <div class="cf">
      <h3 class="f4 f2-ns fw6 mb2 pt3">Catching</h3>
      <article class="half">
        <p>Between Pokéstops and Gyms lie the vast majority of the virtual landscape where feral Pokémon roam. Throughout a day, Pokémon spawn and then despawn after a brief time period. Players can see nearby Pokémon that lie beyond visual range on their trackers. (Trackers show the nine nearest Pokémon and, until disabled by Niantic to alleviate server load, each Pokémon’s approximate distance. Built in response to the impaired tracker, Pokevision.com was a third-party website that scanned Pokemon Go’s internal API and displayed all Pokémon on a global map) A Pokémon becomes visible and targetable when the player comes in sufficient range of it. Upon tapping the Pokémon, the player is taken to a scene that takes a preset or an AR backdrop wherein the Pokémon is placed. To catch the Pokémon, the player must throw at it a Pokéball by swiping their finger across their phone screen. A successful throw does not necessarily result in a successful capture. The chance of the Pokémon escaping the player’s Pokéball depends on the accuracy of the throw, the player’s level, and the Pokémon’s level. Providing the escaped Pokémon does not flee—a possible outcome of an unsuccessful capture—the game provides the player another opportunity to re-attempt the throw.</p>
      </article>
      <figure class="half">
        <img src="https://www.imore.com/sites/imore.com/files/styles/larger/public/field/image/2016/07/catch-pikachu-screenshot-pokemon-go.jpg?itok=fsROqiXx" />
        <figcaption>Figures 3.1, 3.2, 3.3: From left to right. Figure 3.1: Pokémon encounter screen view. Figure 3.2: Successful capture screen view. Figure 3.3: Return to world map view.</figcaption>
      </figure>
    </div>
    <div class="cf">
      <h3 class="f4 f2-ns fw6 mb2 pt3">Items</h3>
      <article class="half">
        <p>During a player’s encounter with a feral Pokémon, the player can use items to improve the likelihood of a successful capture. Ordered in increasing effectiveness as well as rarity, there are several grades of Pokéballs: Pokéballs, Great Balls, and Ultra Balls. (“Pokéball” refers to both a general class of items and a specific item.) In choosing which Pokéball to use, the player must balance their item supply situation with the value of their target Pokéemon. The Razz Berry is the only other item that can improve the chance of successful capture and can be used in conjunction with a Pokéball. The use of these items—Pokéballs and Razz Berries—is strictly limited to the context of a feral Pokémon encounter.</p>

        <p>Outside of that context exist items that enhance other aspects of gameplay. Gym battles deplete an attacking player’s Pokémons’ health, which can be recovered using Potion items. A Lure item, as aforementioned, can be placed in a Pokéstop to attract Pokémon to it. An Incense item is functionally similar to a Lure but instead attracts Pokémon to the player’s location for thirty minutes when consumed. For the same duration, a player can consume a Lucky Egg item to boost their experience point gain when the player is dissatisfied with the pace of their level advancement.</p>

        <p>Items can be purchased using Pokécoins, the in-game currency, from the game shop or, excluding items nonessential to gameplay like Lures and Lucky Eggs, intervally obtained from Pokéstops for free. Upon reaching a new experience level, a player receives a windfall of free items appropriate for their experience level.</p>
      </article>
      <figure class="half">
        <img src="http://img4.looper.com/img/gallery/things-you-should-avoid-doing-in-pokemon-go/dont-waste-your-consumable-items.jpg" />
        <figcaption>Figures 4.1, 4.2, & 4.3: From left to right. Figure 4.1: Item inventory screen view. Figure 4.2: Swipe to activate item. Figure 4.3: World screen view with item aura activated.</figcaption>
      </figure>
    </div>
    <div class="cf">
      <h3 class="f4 f2-ns fw6 mb2 pt3">Leveling</h3>
      <article class="half">
        <p>A player’s experience level determines the availability of item types to the player, the strength cap for the player’s owned Pokémon, and gameplay limitations. The experience level system is not core to gameplay. By setting achievable milestones and guiding players through different aspects of the game, the system sets the pace of gameplay. Experience points are earned from catching and evolving Pokémon, well-thrown Pokéballs, battling gyms, and Pokéstop interactions.</p>
      </article>
      <figure class="half">
      <img class="w-third" src="http://media.fyre.co/sLriUnKGTM2eySE83nL9_IMG_3113.PNG" />
      <figcaption>Placeholder caption</figcaption>
      </figure>
    </div>
  </div>

</section>


<section class="bg-white">

  <div class="container">

    <h1 id="l1-history">User Research <span class="fw1">ユーザーリサーチ</span></h1>

    <div class="cf">
      <h3 class="article-header" id="l2-demographics">Demographics</h3>
      <article class="half">
      <p>Observations:</p>
      <p>Given that the user base is shrinking and shifting toward males, I inferred that the game is retaining male users  better than it is for female users. </p>
      <p>The user base is shifting toward older people. The two demographic datasets are nearly three months apart, providing scarcely enough time to pass for natural aging to be a significant factor. </p>
      <p>Anectodal</p>

      </article>
      <article class="half">
        <h4 class="mb2 mt4">Sex</h4>
        <table class="mw-100 collapse ba br2 b--black-10 pv2 ph3">
          <tbody>
            <tr class="striped--light-gray ">
              <th class="pv2 ph3 tl f6 fw6 ttu"></th>
              <th class="pv2 ph3 tl f6 fw6 ttu">Male</th>
              <th class="pv2 ph3 tl f6 fw6 ttu">Female</th>
            </tr>
            <tr class="striped--light-gray ">
              <td class="pv2 ph3">Late July</td>
              <td class="pv2 ph3">37%</td>
              <td class="pv2 ph3">63%</td>
            </tr>
            <tr class="striped--light-gray ">
              <td class="pv2 ph3">Mid-October</td>
              <td class="pv2 ph3">43% <span class="green b">(+6%)</span></td>
              <td class="pv2 ph3">57% <span class="red b">(-6%)</span></td>
            </tr>
          </tbody>
        </table>

        <h4 class="mb2 mt4">Age</h4>
        <table class="mw-100 collapse ba br2 b--black-10 pv2 ph3">
          <tbody>
            <tr class="striped--light-gray ">
              <th class="pv2 ph3 tl f6 fw6 ttu"></th>
              <th class="pv2 ph3 tl f6 fw6 ttu">13 to 17</th>
              <th class="pv2 ph3 tl f6 fw6 ttu">18 to 29</th>
              <th class="pv2 ph3 tl f6 fw6 ttu">30 to 50</th>
              <th class="pv2 ph3 tl f6 fw6 ttu">50 and over</th>
            </tr>
            <tr class="striped--light-gray ">
              <td class="pv2 ph3">Late July</td>
              <td class="pv2 ph3">22%</td>
              <td class="pv2 ph3">46%</td>
              <td class="pv2 ph3">25%</td>
              <td class="pv2 ph3">6%</td>
            </tr>
            <tr class="striped--light-gray ">
              <td class="pv2 ph3">Mid-October</td>
              <td class="pv2 ph3">20% <span class="red b">(-2%)</span></td>
              <td class="pv2 ph3">43% <span class="red b">(-3%)</span></td>
              <td class="pv2 ph3">29% <span class="green b">(+4%)</span></td>
              <td class="pv2 ph3">8% <span class="green b">(+2%)</span></td>
            </tr>
          </tbody>
        </table>

        <h4 class="mb2 mt4">Income</h4>
        <table class="mw-100 collapse ba br2 b--black-10 pv2 ph3">
          <tbody>
            <tr class="striped--light-gray ">
              <th class="pv2 ph3 tl f6 fw6 ttu"></th>
              <th class="pv2 ph3 tl f6 fw6 ttu">Under $50k</th>
              <th class="pv2 ph3 tl f6 fw6 ttu">$50k to $100k</th>
              <th class="pv2 ph3 tl f6 fw6 ttu">Over $100k</th>
            </tr>
            <tr class="striped--light-gray ">
              <td class="pv2 ph3">Late July</td>
              <td class="pv2 ph3">45.8%</td>
              <td class="pv2 ph3">19.6%</td>
              <td class="pv2 ph3">34.6%</td>
            </tr>
            <tr class="striped--light-gray ">
              <td class="pv2 ph3">Mid-October</td>
              <td class="pv2 ph3">51% <span class="green b">(+5.2%)</span></td>
              <td class="pv2 ph3">23% <span class="green b">(+3.4%)</span></td>
              <td class="pv2 ph3">26% <span class="red b">(-8.6%)</span></td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
    <div class="cf">
      <h3 class="article-header" id="l2-demographics">Interviews</h3>
      <article class="half">
        <p>This section is under construction</p>
      </article>
    </div>

    <div class="cf">
      <h3 class="article-header" id="l2-user-segmentation">User Segmentation</h3>
      <article class="half">
        <p>It is intuitive to presume that all users of Pokémon Go are players because Pokémon Go is a game and, by the Oxford Dictionary’s definition of a player as a “person taking part in a sport or game”, all users of a game are players. Absent from the premise is the function of Pokémon Go is as an informal marketing platform for businesses as well as a game. However, since neither business features nor a business interface are implemented, the marketing platform is  fully encapsulated within the game. If all users are players, then so are the businesses that access Pokémon Go for marketing purposes.</p>
        <p>For a more legible segmentation, I use a working definition of players that excludes businesses. This resulted in two major user groups: players and businesses. Players are further segmented by their feature dimensions: dedication, age, sex, and income. Businesses are divided between small businesses and franchises; large businesses lie outside of my project’s scope.</p>
      </article>
      <article class="half">
        <ul class="lh-title f5-l f4 fw1 cf">
          <li class="fl w-100 w-50-l">Players
            <ul>
              <li>Dedication
                <ul>
                  <li>Newbie</li>
                  <li>Casual</li>
                  <li>Core</li>
                  <li>Hardcore</li>
                </ul>
              </li>
              <li>Age
                <ul>
                  <li>Young</li>
                  <li>Young Adult</li>
                  <li>Adult</li>
                  <li>Elderly</li>
                </ul>
              </li>
              <li>Sex
                <ul>
                  <li>Male</li>
                  <li>Female</li>
                </ul>
              </li>
              <li>Income
                <ul>
                  <li>Low</li>
                  <li>Middle</li>
                  <li>High</li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="fl w-100 w-50-l">Businesses
            <ul>
              <li>Small
                <ul>
                  <li>Owner</li>
                  <li>Employee</li>
                </ul>
              </li>
              <li>Franchise
                <ul>
                  <li>Owner</li>
                  <li>Manager</li>
                  <li>Employee</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

      </article>
    </div>

  </div>

</section>


<section class="bg-navy white">

  <div class="container">

    <h1 id="l1-problem-definition">Problem Definition</h1>

    <div class="cf">
      <h2 class="article-header" id="l2-demographics">Problem Domains</h2>
      <article class="full">
        <h3 class="f4 f1-ns fw6 mb2" id="l2-ux-px-bx">UX = PX + BX</h3>
        <p>User Experience = Player Experience + Business Experience</p>
      </article>
    </div>

  </div>

</section>
