<script lang="ts">
    import Globe from "$lib/assets/svgs/globe.svg";
    import photo from "$lib/assets/about.png";
</script>


<div class="title">
Petrichor
</div>
<div class="caption">
Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor<br>
incididunt ut laboe et dolore manga aliqua
</div>
<div style="display: flex;">
<div class="button1">
    <button type="button" class="ca_portal">CA Portal &gt; &nbsp;</button>
</div>
<div class="button2">
    <button type="button" class="discover">Discover More &gt; &nbsp;</button>
</div>
</div>

<div class="strip">
    <div class="strip1" >
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="banner"><img src={Globe} style="filter: invert();width: 20px;"></div>
        <div class="banner">&nbsp;PETRICHOR</div>
    </div>
    <div class="strip1" >
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="banner"><img src={Globe} style="filter: invert();width: 20px;"></div>
        <div class="banner">&nbsp;PETRICHOR</div>
    </div>
    <div class="strip1" >
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="banner"><img src={Globe} style="filter: invert();width: 20px;"></div>
        <div class="banner">&nbsp;PETRICHOR</div>
    </div>
</div>

<div class="box"></div>
<div class="title2">About Us</div>
<!-- svelte-ignore a11y-missing-attribute -->
<img src={photo} class="photo">
<div class="caption2">Petrichor- the annual techno-cultural fest of IIT Palakkad is back again,<br>and better than ever
    before. Also, yes, it's offline. We, the students of IIT<br>Palakkad, conduct Petrichor every
    year, and made sure last year's event<br>was enthralling for all its participants. Now the
    wait is over; with just the<br>perfect mix of cultural and technical events, we plan on making<br>
    Petrichor'24 an unforgettable experience for you. Trust us when we say<br>that you won't miss out
    on anything. Check out our website as it has<br>answers to all the questions that you might have.
    Stay tuned and brace<br>yourselves for the journey of a lifetime with Petrichor'24!
</div>

<style>
.title{
    position: relative;
    top: 15rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 100px;
    font-weight: 100;
    padding-left: 4vw;
    color: white;
}
.caption{
    position: relative;
    top: 20rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 100;
    color: white;
    padding-left: 4vw;
}
.button1{
    display: flex;
    align-items: center;
    top: 20rem;
}
.ca_portal{
    display: flex;
    color: white;
    position: relative;
    opacity: 75%;
    width: fit-content;
    background: transparent;
    font-size: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 300;
    align-items: center;
    justify-content: center;
    top: 20rem;
    margin-top: 7rem;
    margin-left: 4vw;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 20px;
    border: 2px solid white;
    border-radius: 50px;
    gap: 0.3rem;
}
.button2{
    display: flex;
    align-items: center;
    top: 20rem;
}
.discover{
    display: flex;
    color: white;
    position: relative;
    opacity: 75%;
    width: fit-content;
    background: transparent;
    font-size: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 300;
    align-items: center;
    justify-content: center;
    top: 20rem;
    margin-top: 7rem;
    margin-left: 4vw;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 20px;
    border: 2px solid white;
    border-radius: 50px;
    gap: 0.3rem;
}
.strip {
    position: absolute;
    display: flex;
	align-items: center;
    width: 100vw;
    height: 35px;
    top: 60rem;
    left: 0px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    padding-top: 12px;
    padding-bottom: 12px;
    opacity: 60%;
}
.strip1 {
    display: flex;
    margin: auto;

    /*NOTE: There seems to some error in the animation... */

    /* animation: loop 2s linear infinite; */

    /* Starting position */
    -moz-transform:translateX(100%);
       -webkit-transform:translateX(100%);  
       transform:translateX(100%);

 /* Apply animation to this element */  
       -moz-animation: example1 2s linear infinite;
       -webkit-animation: example1 2s linear infinite;
       animation: example1 2s linear infinite;
}
/* @keyframes loop{
    from{
        left: 0
    }
    to{
        left: -31rem;
    }
} */

.banner{
    display: inline-block;
}
 /* Move it (define the animation) */
 @-moz-keyframes example1 {
       0%   { -moz-transform: translateX(100%); }
       100% { -moz-transform: translateX(-100%); }
      }
      @-webkit-keyframes example1 {
       0%   { -webkit-transform: translateX(100%); }
       100% { -webkit-transform: translateX(-100%); }
      }
      @keyframes example1 {
       0%   { 
       -moz-transform: translateX(100%); /* Firefox bug fix */
       -webkit-transform: translateX(100%); /* Firefox bug fix */
       transform: translateX(100%);         
       }
       100% { 
       -moz-transform: translateX(-100%); /* Firefox bug fix */
       -webkit-transform: translateX(-100%); /* Firefox bug fix */
       transform: translateX(-100%); 
       }
      }

.box{
    position: absolute;
    opacity: 50%;
    top: 64rem;
    right: 0px;
    width: 30vw;
    height: 50px;
    margin-top: 25vh;
    margin-right: 15vw;
    border: 2px solid white;
}
.photo{
    position: absolute;
    top: 65rem;
    right: 0px;
    width: 40vw;
    margin-top: 25vh;
    margin-right: 9vw;

}
.title2{
    position: absolute;
    top: 75rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 6vw;
    font-weight: 100;
    padding-left: 4vw;
    color: white;
}
.caption2{
    position: absolute;
    top: 90rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.2vw;
    font-weight: 100;
    color: white;
    padding-left: 4vw;
    padding-bottom: 4vw;
}
</style>