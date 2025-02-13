---
title: Dialog 对话框
lang: zh-CN
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。 Dialog 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。 `title` 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 `before-close` 的用法。

dialog/basic-usage

:::

:::tip

`before-close` 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 `footer` 具名插槽里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。

:::

## 自定义内容

对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。

:::demo

dialog/customizations

:::

## 嵌套的 Dialog

如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 `append-to-body` 属性。

:::demo 通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 如果必须要在一个对话框内展示另一个对话框，可以将内部嵌套的对话框属性 `append-to-body` 设置为 true，嵌套的对话框将附加到 body 而不是其父节点，这样两个对话框都可以被正确地渲染。

dialog/nested-dialog

:::

## 居中布局

对话框的内容可以居中。

:::demo 将`center`设置为`true`即可使标题和底部居中。 `center`仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。

dialog/centered-content

:::

:::tip

Dialog 的内容是懒渲染的——在被第一次打开之前，传入的默认 slot 不会被立即渲染到 DOM 上。 因此，如果需要对 DOM 进行操作，或通过 `ref` 获取相应的组件，请在 `open` 事件的回调中进行。

:::

## 关闭时销毁

启用此功能时，默认栏位下的内容将使用 `v-if` 指令销毁。 当出现性能问题时，可以启用此功能。

:::demo 需要注意的是，当这个属性被启用时，在 `transition.beforeEnter` 事件卸载前，除了 `overlay`、`header (可选)`与`footer(可选)` ，Dialog 内不会有其它任何其它的 DOM 节点存在。

dialog/destroy-on-close

:::

## 可拖拽的 Dialog

试着拖动一下`header`部分吧

:::demo 设置`draggable`属性为`true`以做到拖拽

dialog/draggable-dialog

:::

:::tip

当设置 `modal` 属性为 false 时，请将 `append-to-body` 属性设置为 **true**，因为 `Dialog` 是通过 `position: relative` 来确定位置的。一旦移除了 `modal` 属性，`Dialog` 会基于当前的 DOM 元素来进行定位， 而不是基于 `document.body`，这会导致样式问题。

:::

## Dialog 属性

| 属性                  | 说明                                                                          | 类型                                 | 可选值 | 默认值 |
| --------------------- | ----------------------------------------------------------------------------- | ------------------------------------ | ------ | ------ |
| model-value / v-model | 是否显示 Dialog                                                               | boolean                              | —      | —      |
| title                 | Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入                | string                               | —      | —      |
| width                 | Dialog 的宽度                                                                 | string / number                      | —      | 50%    |
| fullscreen            | 是否为全屏 Dialog                                                             | boolean                              | —      | false  |
| top                   | Dialog CSS 中的 margin-top 值                                                 | string                               | —      | 15vh   |
| modal                 | 是否需要遮罩层                                                                | boolean                              | —      | true   |
| append-to-body        | Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true | boolean                              | —      | false  |
| lock-scroll           | 是否在 Dialog 出现时将 body 滚动锁定                                          | boolean                              | —      | true   |
| custom-class          | Dialog 的自定义类名                                                           | string                               | —      | —      |
| open-delay            | Dialog 打开的延时时间，单位毫秒                                               | number                               | —      | 0      |
| close-delay           | Dialog 关闭的延时时间，单位毫秒                                               | number                               | —      | 0      |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog                                            | boolean                              | —      | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog                                              | boolean                              | —      | true   |
| show-close            | 是否显示关闭按钮                                                              | boolean                              | —      | true   |
| before-close          | 关闭前的回调，会暂停 Dialog 的关闭                                            | function(done)，done 用于关闭 Dialog | —      | —      |
| draggable             | 为 Dialog 启用可拖拽功能                                                      | boolean                              | —      | false  |
| center                | 是否让 Dialog 的 header 和 footer 部分居中排列                                | boolean                              | —      | false  |
| destroy-on-close      | 当关闭 Dialog 时，销毁其中的元素                                              | boolean                              | —      | false  |

## Dialog 插槽

| 插槽名 | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

## Dialog 事件

| 事件名           | 说明                               | 参数 |
| ---------------- | ---------------------------------- | ---- |
| open             | Dialog 打开的回调                  | —    |
| opened           | Dialog 打开动画结束时的回调        | —    |
| close            | Dialog 关闭的回调                  | —    |
| closed           | Dialog 关闭动画结束时的回调        | —    |
| open-auto-focus  | 输入焦点聚焦在 Dialog 内容时的回调 | —    |
| close-auto-focus | 输入焦点从 Dialog 内容失焦时的回调 | —    |
