import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/button";

storiesOf("Button 按钮", module).add("按钮", () => (
	<div>
		<p>
			<Button onClick={action("clicked")}>默认</Button>
		</p>
		<p>
			<Button type="primary" onClick={action("clicked")}>
				主色调
			</Button>
		</p>
		<p>
			<Button type="info" onClick={action("clicked")}>
				信息
			</Button>
		</p>
		<p>
			<Button type="warning" onClick={action("clicked")}>
				警告
			</Button>
		</p>
		<p>
			<Button type="error" onClick={action("clicked")}>
				错误
			</Button>
		</p>
		<p>
			<Button type="success" onClick={action("clicked")}>
				成功
			</Button>
		</p>
		<p>
			<Button type="disabled" onClick={action("clicked")}>
				禁用
			</Button>
		</p>
		<p>
			<Button type="primary" block onClick={action("clicked")}>
				100%
			</Button>
		</p>
	</div>
));
