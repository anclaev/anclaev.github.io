import { FormattedMessage, useIntl } from 'react-intl'

import Lang from '../../components/Lang'

import { StyledMenu as Styled } from '../../styled/containers'
import { StyledProjects, StyledProject } from '../../styled/components'

import { IMenu } from '../../types/containers.types'

// import Social from "../Social"

// import data from "../../config/content.json"

const Menu: React.FC<IMenu> = ({ status, dispatch }) => {
  const intl = useIntl()

  return (
    <Styled status={status} dispatch={dispatch}>
      <div>
        <h2>
          <FormattedMessage id="menu_title" />
        </h2>

        <StyledProjects>
          <StyledProject>
            <img src="media/projects/vanne.webp" alt="Vanne" />
            <div>
              <FormattedMessage id="project_vanne_title" tagName={'h3'} />
              <FormattedMessage id="project_vanne_desc" tagName={'p'} />
              <ul>
                <li>
                  <a
                    href="https://vanne.uno"
                    rel="noopenner noreferrer"
                    className="cursor"
                    target="_blank"
                    title={intl.formatMessage({ id: 'menu_link_prod_title' })}
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({ id: 'menu_link_prod' }),
                    }}
                  />
                </li>
                <li>
                  <a
                    href="https://vanne-ng.anclaev.com"
                    rel="noopenner noreferrer"
                    className="cursor"
                    target="_blank"
                    title={intl.formatMessage({
                      id: 'menu_link_staging_title',
                    })}
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({ id: 'menu_link_staging' }),
                    }}
                  />
                </li>
                <li>
                  <a
                    href="https://github.com/anclaev/vanne"
                    rel="noopenner noreferrer"
                    className="cursor"
                    target="_blank"
                    title={intl.formatMessage({ id: 'menu_link_code_title' })}
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({ id: 'menu_link_code' }),
                    }}
                  />
                </li>
                <li>
                  <a
                    href="https://docs.vanne.uno"
                    rel="noopenner noreferrer"
                    className="cursor"
                    target="_blank"
                    title={intl.formatMessage({ id: 'menu_link_docs_title' })}
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({ id: 'menu_link_docs' }),
                    }}
                  />
                </li>
              </ul>
            </div>
          </StyledProject>
        </StyledProjects>
        <Lang dispatch={dispatch ?? null} />
      </div>
    </Styled>
  )
}

export default Menu
