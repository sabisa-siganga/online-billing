<template>
  <header class="nav-header">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="right">
      <div class="notifications">
        <a-popover
          overlayClassName="notification-popover-container"
          trigger="click"
        >
          <template #content>
            <div class="notification-popover">
              <h2>No notifications</h2>
            </div>
          </template>
          <button class="notification-btn">
            <span><BellOutlined /></span>
            <i class="notification-dot" />
          </button>
        </a-popover>
      </div>
      <div class="line"></div>
      <div class="user-dropdown">
        <a-dropdown overlayClassName="profile-container">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            <div class="user-image">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                alt=""
              />
            </div>
            <div class="user-details">
              <div class="name">Yvonne Coleman</div>
              <div class="email">lbricket2@digg.com</div>
            </div>
            <div class="user-arrowdown">
              <DownOutlined />
            </div>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">Account</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">Settings</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">Log Out</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import { BellOutlined, DownOutlined } from "@ant-design/icons-vue";

export default {
  name: "NavHeader",
  components: {
    BellOutlined,
    DownOutlined,
  },
};
</script>

<style lang="scss">
.nav-header {
  border-bottom: 1px solid var(--borderColor);
  display: flex;
  height: 70px;
  align-items: center;
  padding: 5px 25px;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 5;

  .logo {
    width: 150px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .right {
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    max-width: 100%;
    align-items: center;

    .line {
      height: 50px;
      width: 1px;
      background-color: #eee;
      margin: 0 35px;
    }

    .notifications {
      position: relative;

      span {
        height: 20px;
        width: 20px;
        display: block;
        border-radius: 50%;

        svg {
          width: 23px;
          height: auto;
        }
      }

      .notification-dot {
        position: absolute;
        height: 8px;
        width: 8px;
        background-color: var(--blue);
        border-radius: 50%;
        top: 1px;
        right: -1px;
      }

      .notification-btn {
        border: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
      }
    }

    .user-dropdown {
      .ant-dropdown-link {
        display: flex;
        align-items: center;
      }

      .user-image {
        height: 50px;
        width: 50px;
        border-radius: 50%;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      .user-details {
        margin-left: 15px;

        .name {
          color: var(--black);
          font-size: 20px;
          font-weight: 600;
          line-height: 20px;
        }

        .email {
          font-weight: 500;
          font-size: 13px;
          color: var(--skyBlue);
          margin-top: 3px;
        }
      }
    }
  }

  .user-arrowdown {
    svg {
      width: 29px;
      height: 18.33px;
      fill: #000;
    }
  }
}

.notification-popover-container {
  .notification-popover {
    min-width: 210px;
    text-align: center;
    min-height: 80px;
    padding-top: 15px;

    h2 {
      font-size: 16px;
      color: #898989;
      font-weight: 400;
    }
  }
}

.profile-container {
  > ul {
    min-width: 200px;

    a {
      color: var(--black);
      font-size: 15px;
    }
  }
}
</style>
