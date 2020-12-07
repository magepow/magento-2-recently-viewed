<?php
/**
 * Config
 *
 * @copyright Copyright © 2020 Magepow. All rights reserved.
 * @author    @copyright Copyright (c) 2014 Magepow (<https://www.magepow.com>)
 * @license <https://www.magepow.com/license-agreement.html>
 * @Author: magepow<support@magepow.com>
 * @github: <https://github.com/magepow>
 */

namespace Magepow\RecentlyViewed\Controller\Index;

use  Magepow\RecentlyViewed\Helper\Data;
use Magento\Framework\Controller\ResultFactory;
class Config extends \Magento\Framework\App\Action\Action
{
    protected $resultJsonFactory;

    protected $storeManager;

    protected $scopeConfig;

    protected $_helper;
    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magepow\RecentlyViewed\Helper\Data $_helper,
        \Magento\Framework\Controller\Result\JsonFactory $resultJsonFactory,
        \Magento\Store\Model\StoreManagerInterface $storeManager,
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig
    ) {
        $this->_helper = $_helper;
        $this->resultJsonFactory = $resultJsonFactory;
        $this->storeManager = $storeManager;
        $this->scopeConfig = $scopeConfig;
        parent::__construct($context);
    }

    /**
     * Execute view action
     *
     * @return \Magento\Framework\Controller\ResultInterface
     */
    public function execute()
    {
        $enableConfig = $this->_helper->getConfigModule('general/enabled');
        echo $enableConfig;
    }
}
