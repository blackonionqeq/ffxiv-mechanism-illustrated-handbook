export type MechanismTableItem = {
	/** 技能名称 */
	skillName: string
	/**种类。TODO:增加种类图鉴 */
	category: string
	/**描述 */
	description: string
	/**截图 */
	screenshot?: string
	/**躲避方式 */
	howTo: string
	/** 示意图 */
	schematic?: string
	/**备注 */
	remark?: string
}