<template>
    <header>
        <nav id="nav">
            <ul>
                <li><router-link to="/">Main</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/page">Page</router-link></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss">

#nav {
  padding: 30px;

  ul{
      display:flex;
      align-items: center;
      justify-content: center;
      li{
          a{
              display:inline-block;
              padding:0 20px;
          }
      }
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>