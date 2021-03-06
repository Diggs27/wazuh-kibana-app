/*
 * Wazuh app - File for app requirements and set up
 * Copyright (C) 2018 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import 'plugins/wazuh/factories/data-handler-composer';
import 'plugins/wazuh/factories/raw-visualizations';
import 'plugins/wazuh/factories/loaded-visualizations';
import 'plugins/wazuh/factories/tab-visualizations';
import 'plugins/wazuh/factories/discover-pending-updates';
import 'plugins/wazuh/factories/vis-handlers';
import 'plugins/wazuh/factories/vis2png';
import 'plugins/wazuh/factories/share-agent';
import 'plugins/wazuh/factories/misc';