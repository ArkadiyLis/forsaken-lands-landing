<script setup lang="ts">
import Header from "~/components/Header.vue";
import SocialLinks from "~/components/SocialLinks.vue";
import PageNavigation from "~/components/PageNavigation.vue";
</script>

<template>
  <div class="w-full bg-base">
    <Header/>
    <main class="overflow-hidden w-full">
      <section class="pt-52 pb-16" id="main">
        <div class="container mx-auto my-56">
          <div class="flex flex-col justify-center items-center max-w-3xl h-96 gap-6">
<!--            <div class="title-large uppercase text-7xl">Forsaken Lands</div>-->
            <img class="opacity-80" src="/exports/LOGO.png" alt="logo" loading="lazy" />

            <div class="flex justify-center items-center w-80">
              <img class="opacity-80" src="/exports/processed/answer_button_border.png" alt="logo" loading="lazy" />
              <a href="#" class="flex gap-2 absolute">
                <span class="flex items-center">
                  <font-awesome-icon class="text-black" size="xl" icon="fa-brands fa-steam"/>
                </span>
                <span class="oswald-semi-bold-font text-black text-2xl uppercase italic">Wishlist us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-52 pb-16" id="description">
        <div class="container mx-auto my-64">
          <div class="max-w-3xl">
            <span class="title oswald-semi-bold-font uppercase text-base font-semibold tracking-widest">About the game</span>
            <div class="oswald-font uppercase text-6xl">Roguelite Deckbulder With A Soul</div>
            <div class="pt-4">
              <h1 class="text-xl uppercase pb-5">Unlock new characters - Upgrade your island - Explore all the secrets of Forsaken Lands</h1>
              <p class="text-xl pb-5">In a world where technological progress prevails, аnd the power of untamed energy is harnessed by mages… Ordinary people have nothing left but to live their ordinary, carefree lives. Under the protection of the great gods, who watch from their heavenly realm.
              </p>
              <p class="text-xl pb-5">Everything in this world existed in peace and harmony. Until someone decided to hog the cover... And the world turned into… the "Forsaken Lands"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16" id="features">
        <div class="container mx-auto my-14 flex flex-col items-center gap-20 xl:items-stretch">

          <article class="flex flex-col justify-around items-center gap-8 xl:gap-28 text-center xl:text-left xl:flex-row">
            <div class="relative h-full w-full overflow-hidden">
              <img class="absolute top-0 w-full h-full z-30" src="/exports/window_border.png" alt="background" loading="lazy" />
              <img class="" src="/coop.png" alt="Co-op up to 3 players" loading="lazy" />
            </div>

            <div class="w-full max-w-2xl">
              <div class="title oswald-semi-bold-font uppercase text-base font-semibold tracking-widest">features</div>
              <div class="oswald-font uppercase text-6xl">Co-op up to 3 players</div>
              <p class="text-xl pt-4">Sometimes you just want to snuggle up in a warm blanket on a chilly evening, sit at your monitor, and sip mulled wine while playing something captivating and relaxing with your friends... How about 'Forsaken Lands'? You can invite both your friends and find new ones in the server list!</p>
            </div>
          </article>

          <article class="flex flex-col justify-around items-center gap-8 xl:gap-28 text-center xl:text-right xl:flex-row-reverse">
            <div class="relative h-full w-full overflow-hidden">
              <img class="absolute top-0 w-full h-full z-30" src="/exports/window_border.png" alt="background" loading="lazy" />
              <img src="/roguelite-style.png" alt="Roguelite-style" loading="lazy" />
            </div>
            <div class="w-full max-w-2xl">
              <div class="title oswald-semi-bold-font uppercase text-base font-semibold tracking-widest">features</div>
              <div class="oswald-font uppercase text-6xl">Experience a roguelite-style narrative playthrough</div>
              <p class="text-xl pt-4">In Forsaken Lands, you'll encounter a multitude of unique battles, dialogues, and adventures on your way to the goal.</p>
            </div>
          </article>

          <article class="flex flex-col justify-around items-center gap-8 xl:gap-28 text-center xl:text-left xl:flex-row">
            <div class="relative h-full w-full overflow-hidden">
              <img class="absolute top-0 w-full h-full z-30" src="/exports/window_border.png" alt="background" loading="lazy" />
              <img src="/personal-island.png" alt="Customize your personal island" loading="lazy" />
            </div>
            <div class="w-full max-w-2xl">
              <div class="title oswald-semi-bold-font uppercase text-base font-semibold tracking-widest">features</div>
              <div class="oswald-font uppercase text-6xl">Customize your personal island</div>
              <p class="text-xl pt-4">Every traveler needs a place to relax, shine up their battle cards, polish their beloved relics, and give their tired backside a break. In your case, it will be a bar located on a floating piece of land.</p>
            </div>
          </article>

          <article class="flex flex-col justify-around items-center gap-8 xl:gap-28 text-center xl:text-right xl:flex-row-reverse">
            <div class="relative h-full w-full overflow-hidden">
              <img class="absolute top-0 w-full h-full z-30" src="/exports/window_border.png" alt="background" loading="lazy" />
              <img src="/team-of-heroes.png" alt="Build YOUR team of heroes" loading="lazy" />
            </div>
            <div class="w-full max-w-2xl">
              <div class="title oswald-semi-bold-font uppercase text-base font-semibold tracking-widest">features</div>
              <div class="oswald-font uppercase text-6xl">Build YOUR team of heroes</div>
              <p class="text-xl pt-4">What is a hero? It's not just a set of stats and unique cards; but a story of their own, unique abilities, and an altered playstyle as well. Try out each of the 10+ heroes and find the ones that will surely capture your heart  :heart:</p>
            </div>
          </article>

          <article class="flex flex-col justify-around items-center gap-8 xl:gap-28 text-center xl:text-left xl:flex-row">
            <div class="relative h-full w-full overflow-hidden">
              <img class="absolute top-0 w-full h-full z-30" src="/exports/window_border.png" alt="background" loading="lazy" />
              <img src="/loot.png" alt="Collect loot!" loading="lazy" />
            </div>
            <div class="w-full max-w-2xl">
              <div class="title oswald-semi-bold-font uppercase text-base font-semibold tracking-widest">features</div>
              <div class="oswald-font uppercase text-6xl">Collect loot!</div>
              <p class="text-xl pt-4">Discover relics, unlock new cards, level up your characters, and uncover secret ways to gain maximum benefits from every event. Don't forget to spend your gold with the traders!</p>
            </div>
          </article>
        </div>
      </section>

      <section class="pt-28 pb-52" id="about-us">
        <div class="container flex flex-col items-stretch mx-auto">
          <div class="divider items-center gap-3 pb-10">
            <img src="/exports/divider.png" alt="divider" loading="lazy" />
            <h1 class="title oswald-semi-bold-font uppercase whitespace-nowrap">About us</h1>
            <img src="/exports/divider.png" alt="divider" loading="lazy" />
          </div>
          <div class="team max-w-5xl gap-8 self-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <figure class="member relative flex flex-col items-stretch">
              <img class="shadow absolute w-full h-full z-1" src="/exports/processed/text_back_alpha.png" alt="background" loading="lazy" />
              <div class="flex flex-col p-6 pb-0">
                <div class="relative self-center w-48 h-48">
                  <img class="absolute h-full left-2/4 -translate-x-1/2 z-30" src="/exports/portrait_border.png" alt="Mike" loading="lazy" />
                  <img class="absolute h-full left-2/4 -translate-x-1/2 z-20" src="/exports/chars/pierre_neutral.png" alt="Mike" loading="lazy" />
                </div>
              </div>
              <figcaption class="flex flex-col text-center h-full p-6 gap-3 z-10">
                <h1 class="oswald-bold-font text-xl uppercase">Mike</h1>
                <p class="text-xl">Producer | Co-founder</p>
                <p class="text-xl">He worked as both a game designer and a programmer until he realized that he enjoyed managing the company more, so he quickly became a producer. He's a professional shark tank diver!
                </p>
                <font-awesome-icon size="2x" class="base-hovered cursor-pointer mt-auto" icon="fa-brands fa-twitter" />
              </figcaption>
            </figure>
            <figure class="member relative flex flex-col items-stretch">
              <img class="shadow absolute w-full h-full z-1" src="/exports/processed/text_back_alpha.png" alt="background" loading="lazy" />
              <div class="flex flex-col p-6 pb-0">
                <div class="relative self-center w-48 h-48">
                  <img class="absolute h-full left-2/4 -translate-x-1/2 z-30" src="/exports/portrait_border.png" alt="Konstantin" loading="lazy" />
                  <img class="absolute h-full left-2/4 -translate-x-1/2 z-20" src="/exports/chars/pierre_neutral.png" alt="Konstantin" loading="lazy" />
                </div>
              </div>
              <figcaption class="flex flex-col text-center h-full p-6 gap-3 z-10">
                <h1 class="oswald-bold-font text-xl uppercase">Konstantin</h1>
                <p class="text-xl">Lead Game Designer | Co-founder</p>
                <p class="text-xl">After trying out literally every role in game design over a career spanning more than 10 years, he decided to focus on team management and bringing his own projects to life.
                </p>
                <font-awesome-icon size="2x" class="base-hovered cursor-pointer mt-auto" icon="fa-brands fa-twitter" />
              </figcaption>
            </figure>
            <figure class="member relative flex flex-col items-stretch">
              <img class="shadow absolute w-full h-full z-1" src="/exports/processed/text_back_alpha.png" alt="background" loading="lazy" />
              <div class="flex flex-col p-6 pb-0">
                <div class="relative self-center w-48 h-48">
                  <img class="absolute h-full left-2/4 -translate-x-1/2 z-30" src="/exports/portrait_border.png" alt="Anastasia" loading="lazy" />
                  <img class="absolute h-full left-2/4 -translate-x-1/2 z-20" src="/exports/chars/medina_neutral.png" alt="Anastasia" loading="lazy" />
                </div>
              </div>
              <figcaption class="flex flex-col text-center h-full gap-3 p-6 z-10">
                <h1 class="oswald-bold-font text-xl uppercase">Anastasia</h1>
                <p class="text-xl">Developer | SFX Magician</p>
                <p class="text-xl">With her magical touch, creates projects of any complexity from scratch, establishing a strong foundation and clear structure. By the way, she can demolish anyone in D&D!
                </p>
                <font-awesome-icon size="2x" class="base-hovered cursor-pointer mt-auto" icon="fa-brands fa-twitter" />
              </figcaption>
            </figure>
            <figure class="member relative flex flex-col items-stretch">
              <img class="shadow absolute w-full h-full z-1" src="/exports/processed/text_back_alpha.png" alt="background" loading="lazy" />
              <div class="flex flex-col p-6 pb-0">
                <div class="relative self-center w-48 h-48">
                  <img class="absolute h-full left-2/4 -translate-x-1/2 z-30" src="/exports/portrait_border.png" alt="Daria" loading="lazy" />
                  <img class="absolute h-full left-2/4 -translate-x-1/2 z-20" src="/exports/chars/viola_neutral.png" alt="Daria" loading="lazy" />
                </div>
              </div>
              <figcaption class="flex flex-col text-center h-full gap-3 p-6 z-10">
                <h1 class="oswald-bold-font text-xl uppercase">Daria</h1>
                <p class="text-xl">2D Lead Artist | Magician</p>
                <p class="text-xl">If you like the style of our games, it's all thanks to her. If you don't like it, she's to blame for that too! All our ideas take shape thanks to her imagination and strong brush. And yeah, she can also obliterate you in D&D!
                </p>
                <font-awesome-icon size="2x" class="base-hovered cursor-pointer mt-auto" icon="fa-brands fa-twitter" />
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="pt-60 pb-52" id="community">
        <div class="container w-full mx-auto flex justify-end text-center lg:text-right xl:text-right">
          <div class="flex flex-col items-center lg:items-end xl:items-end max-w-2xl">
            <p class="title oswald-semi-bold-font uppercase text-base font-semibold tracking-widest">community</p>
            <p class="oswald-font uppercase text-6xl">follow & subscribe</p>
            <p class="text-xl pt-4 pb-4">Join the growing Forsaken Lands community on all social media platforms. We welcome every adventure seeker!
            </p>

            <SocialLinks icon-size="4x"/>
          </div>
        </div>
      </section>

<!--      <section class="section2" id="coop">Cooperative</section>-->
<!--      <section class="section2" id="day-night">Day and Night</section>-->
<!--      <section class="section2" id="press-kit">Press kit</section>-->

    </main>
    <footer class="pb-12">
      <div class="container mx-auto h-full flex flex-col items-center justify-center gap-4">
<!--        <div class="uppercase text-7xl text-center">Forsaken Lands</div>-->
        <img class="lg:max-w-3xl opacity-80" src="/exports/LOGO.png" alt="logo" loading="lazy" />
        <SocialLinks icon-size="2x"/>
        <PageNavigation/>
        <p class="text-xl">All rights reserved</p>
      </div>
    </footer>
  </div>
</template>