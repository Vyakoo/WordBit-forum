<script>
    export default {
        props: ['active'],
        emits: ['ActiveBar']

    }
</script>

<template>
    <div id="SideBar">
        <button id="burger" @click="$emit('ActiveBar', {options: 2})" :class="{'active': isActive}">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div id="container">
            <div id="content">
            <a id="item" href="#">
            <button>
                <img src="../assets/icons/youtube.png" alt="youtube">
                YouTube
            </button>
            </a>
            <a id="item" href="#">
                <button>
                    <img src="../assets/icons/github.png" alt="github">
                    GitHub
                </button>
            </a>
            <a id="item" href="#">
                <button>
                    <img src="../assets/icons/project.png" alt="project">
                    Project
                </button>
            </a>
            </div>
        </div>
    </div>
</template>

<style scoped>

#SideBar {
    position: sticky;
    top: 163px;
}

#container {
    display: block;
    width: 5vw;
}

#content {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
    padding: 0.5ch 0;
    z-index: 2;
    width: 5vw;
    height: 100vh;
    background-color: #222;
    box-sizing: border-box;
    color: gray;
    overflow: hidden;
    transition: width 1s ease;
}

#content:hover {
    width: 20vw;
}

a button {
    width: 20vw;
    overflow: hidden;
    white-space: nowrap;
    transition: all .5s ease;
}

a button:hover {
    background-color: rgb(47, 58, 107);
}

img {
    object-fit: cover;
    width: 3vw;
    height: auto;
    margin-right: 7vw;
}

#burger {
    display: none;
    position: sticky;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 10%;
    background-color: #fff;
    top: 170px;   
}

#burger span {
    position: absolute;
    width: 30px;
    height: 3px;
    background: black;
    left: 5px;
    transition: all .5s ease;
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

@media (max-width: 800px) {
    #burger {
        display: block;
    }

    #content {
        position: absolute;
        left: -100%;
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