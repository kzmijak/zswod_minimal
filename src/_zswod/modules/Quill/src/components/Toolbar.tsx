import { FC } from 'react';
import { Quill } from 'react-quill';
import { ToolbarStyle } from './ToolbarStyle';
import { fontSizeConsts } from '../models/FontSize';
import { headingConsts } from '../models/Heading';

const Size = Quill.import('attributors/style/size');
Size.whitelist = fontSizeConsts;
Quill.register(Size, true);

const Font = Quill.import('attributors/style/font');
Font.whitelist = fontSizeConsts;
Quill.register(Font, true);

type ToolbarProps = {
  id: string;
  isSimple?: boolean;
};

const Toolbar: FC<ToolbarProps> = ({ id, isSimple }) => (
  <ToolbarStyle>
    <div id={id}>
      <div className="ql-formats">
        {!isSimple && (
          <select className="ql-font" defaultValue="">
            <option value="">Font</option>
            {fontSizeConsts.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        )}

        {!isSimple && (
          <select className="ql-size" defaultValue="16px">
            {fontSizeConsts.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        )}

        <select className="ql-header" defaultValue="">
          {headingConsts.map((heading, index) => (
            <option key={heading} value={index + 1}>
              {heading}
            </option>
          ))}
          <option value="">Normal</option>
        </select>
      </div>

      <div className="ql-formats">
        <button type="button" className="ql-bold" />
        <button type="button" className="ql-italic" />
        <button type="button" className="ql-underline" />
        <button type="button" className="ql-strike" />
      </div>

      {!isSimple && (
        <div className="ql-formats">
          <select className="ql-color" />
          <select className="ql-background" />
        </div>
      )}

      <div className="ql-formats">
        <button type="button" className="ql-list" value="ordered" />
        <button type="button" className="ql-list" value="bullet" />
        {!isSimple && <button type="button" className="ql-indent" value="-1" />}
        {!isSimple && <button type="button" className="ql-indent" value="+1" />}
      </div>

      {!isSimple && (
        <div className="ql-formats">
          <button type="button" className="ql-script" value="super" />
          <button type="button" className="ql-script" value="sub" />
        </div>
      )}

      {!isSimple && (
        <div className="ql-formats">
          <button type="button" className="ql-code-block" />
          <button type="button" className="ql-blockquote" />
        </div>
      )}

      <div className="ql-formats">
        <button type="button" className="ql-direction" value="rtl" />
        <select className="ql-align" />
      </div>

      <div className="ql-formats">
        <button type="button" className="ql-link" />
        <button type="button" className="ql-image" />
        <button type="button" className="ql-video" />
      </div>

      <div className="ql-formats">
        {!isSimple && <button type="button" className="ql-formula" />}
        <button type="button" className="ql-clean" />
      </div>
    </div>
  </ToolbarStyle>
);

export { Toolbar };
