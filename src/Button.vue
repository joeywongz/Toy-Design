<template>
        <button class="t-button" :class="{[`icon-${iconPosition}`]: true}">
            <t-icon v-if="icon" :name="icon"></t-icon>
            <div class="content">
                <slot></slot>
            </div>
        </button>
</template>

<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right';
                }
            }
        }    
    }
</script>
<style lang="scss">
    .t-button {
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .t-icon {
                order: 1;
                margin-right: .1em;
            }
        > .content {
                order: 2;
            }
        &.icon-right{
            > .t-icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content {
                order: 1;
            }
        }
    }
</style>