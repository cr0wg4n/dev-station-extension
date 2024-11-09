import BlockInput from "../../Generic/BlockInput"

const WebsiteBlocker: React.FC = () => {
    return <div>
        <BlockInput name="Block Url">
            <input type="text" placeholder="Type here" className="input input-bordered input-xs w-full" />
        </BlockInput>
    </div>   
}

export default WebsiteBlocker