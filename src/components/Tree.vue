<script lang="tsx">
import { computed, ref, Transition } from 'vue';
import { defineComponent } from 'vue';
import arrow from './tree/arrow-down.svg'
import type { Node } from './tree/tree-node.d'

export const Tree = defineComponent({
	props: {
		node: {
			type: Object as () => Node,
			required: true,
		},
		level: {
			type: Number,
			default: 0,
		},
		indent: {
			type: Number,
			default: 15,
		},
	},
	setup(props, ctx) {
		const hasChildren = computed(() => props.node.children?.length)
		const isExpanded = ref(true)
		return {
			hasChildren,
			isExpanded,
		}
	},
	render() {
		const content = this.$slots.default ? this.$slots.default(this.node) : () => this.node.label
		return <div class='tree flex-column'>
			<div class="content flex-vertical-center" onClick={()=> this.isExpanded = !this.isExpanded}>
				{
					this.hasChildren ?
					<img width='15' src={arrow} alt={arrow} style={{
						transition: 'transform 0.3s ease',
						transform: this.isExpanded ? '' : 'rotate(-90deg)',
						margin: '0 8px',
					}} /> :
					<div style={{width: '23px', height: '15px', background: 'transparent'}}></div>
					// null
				}
				<div class='label-wrapper'>
					{ content }
				</div>
			</div>
			{
				this.hasChildren ?
				<Transition>
					<div class='children-wrapper' v-show={this.isExpanded}>
						{
							this.node.children!.map((child, idx) => <div class='flex' key={idx}>
								<div style={{width: `${1 * this.indent}px`}}></div>
								<Tree level={this.level+1} node={child} indent={this.indent} v-slots={
									this.$slots
								}>
								</Tree>
							</div>)
						}
					</div>
				</Transition> : null
			}
		</div>
	},
})
export default Tree
</script>

<style scoped>
.tree {
	width: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>