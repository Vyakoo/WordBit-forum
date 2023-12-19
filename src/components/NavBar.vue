<script>
export default {
    props: ['active'],
    emits: ['ActiveBar'],
    
    methods : {
        MainPage() 
        {
            this.$router.push({
                name: "Main"
            });
        }
    }
}

</script>

<template>
    <nav id="navbar">
        <div id="header" class="container-fluid">
            <a id="name" class="navbar-brand text-center" href="#">
                <img src="../assets/icon.jpg" alt="Logo" id="avatar" class="d-inline-block">
                Vyakoo
            </a>
            <button id="burger" @click="$emit('ActiveBar', {options: 2})" :class="{'active': active}">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div id="header-right" :class="{'active': active}">
                <a href="#home" @click="MainPage">Главная</a>
                <a href="#contact">Контакты</a>
                <a href="#about">О нас</a>
            </div>
        </div>
    </nav>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');

#navbar {
    position: sticky;
    top: 0;
}

#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    border-bottom: 3px solid;
    overflow: auto;
    z-index: 10;
}

#header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1b2a41;
    z-index: 11;
}

#header-right {
    gap: 10px;
    justify-content: center;
    align-items: center;
}

#header-right a {
    position: relative;
    font-size: 2rem;
    padding: 10px;
    z-index: 12;
}

#avatar {
    width: 100px;
    height: auto;
    margin: 10px;
    border-radius: 50%;
    border: 0.2vw solid black;
 
}

#name {
    color: #ccc9dc; 
    font-family: 'Caveat', cursive;
    font-size: 3rem;
    z-index: 51;
}

#burger {
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 10%;
    background-color: #fff;
    z-index: 12;
}

#burger span:nth-child(1) {
    transform: translateY(-11px);
}

#burger span:nth-child(2) {
    transform: translateY(-1px);
}

#burger span:nth-child(3) {
    transform: translateY(9px);
}

#burger span {
    position: absolute;
    width: 30px;
    height: 3px;
    background: black;
    left: 5px;
    transition: all .5s ease;
}



@media (max-width: 800px) {
    #burger {
        display: block;
    }

    #header-right {
        position: fixed;
        left: 0;
        top: -100%;
        background-color: #fff;
        width: 100%;
        height: 100%;
        padding-top: 170px;
        font-size: 3rem;
        transition: all .7s ease;
    }

    #header-right.active {
        position: fixed;
        left: 0;
        top: 0;
        background-color: #fff;
        width: 100%;
        height: 100%;
        padding-top: 200px;
        font-size: 3rem;
    }

    #header-right a {
        display: block;
    }

    #burger.active span:nth-child(1) {
    transform: rotate(45deg);
    }

    #burger.active span:nth-child(2) {
        transform: scale(0);
    }

    #burger.active span:nth-child(3) {
        transform: rotate(-45deg);
    }
}

</style>        

